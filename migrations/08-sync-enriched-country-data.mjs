import parse from 'csv-parse/lib/sync'
import fs from 'fs'
import v from 'voca'

import { batch, collection } from './utils/firestore'
import merge from 'deepmerge'

import fetchData from './data/fetch-rankings'
import fetchCountryData from './data/fetch-country-data'
import fetchLatLong from './data/fetch-lat-long'

const log = console.log.bind(console)
const chunk = (array = [], size) => {
  const firstChunk = array.slice(0, size)
  if (!firstChunk.length) {
    return array
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size))
}

/**
  * Fetch data and enrich a core data set
  * @param {Function} fetch An async function that takes a url and a list of unfound data items
  * @param {Function} find A function to be called on a core data item
  * and list of enriched items to find enriched data
  * @param {(string\|Function)} url The url to fetch data from
  * @param {Object[][]} data a tuple of enriched and notfound data
  *
  * @returns {Object[][]} Returns a tuple of enriched and notfound data
 */
const fetchNenrich = ({ fetch, find }) => (url) => async ([ enriched, notfound ]) => {
  const enrichmentData = await fetch(url, notfound)
  const result = notfound.reduce(([ enriched, notfound ], item) => {
    const found = find(item, enrichmentData)
    return found
      ? [ enriched.concat({ ...item, ...found }), notfound ]
      : [ enriched, notfound.concat(item) ]
  }, [ enriched, [] ])

  return result
}

const syncToFirebase = async (data) => {
  const b = batch()

  data.forEach(({ id, ...data }) => {
    log(`Syncing: ${id}`)
    b.set(
      collection('locations').doc(id),
      data
    )
  })

  // Commit batch
  return b.commit()
}

const chain = async (fs, data) => fs.reduce((acc, it) => acc.then(it), Promise.resolve(data))
const chainEnrich = async (fs, data) => fs.reduce((acc, it) => acc.then(it), Promise.resolve([[], data]))
const pivotNdrop = (fromtype) => async ([ enriched, notfound = [] ]) => {
  if (notfound.length) {
    log(`Unable to find ${fromtype} data for:`, notfound.map(_ => _.id))
    log(`Dropping ${notfound.length} items`)
  }
  log(`Finished enriching ${fromtype} data`)
  return [ [], enriched ]
}

const feLatLong = fetchNenrich({ fetch: fetchLatLong, find: ({ id }, l) => l[id] && { location: l[id] } })
const feCitylocation = fetchNenrich({
  fetch: (path) => parse(fs.readFileSync(path, 'utf-8'), { columns: true }),
  find: ({ id, ...rest } = {}, items) => {
    const result = items.find(({ cityascii, country }) => id === v.kebabCase(`${country} ${cityascii}`))

    if (!result) return

    const { lat: latitude, lng: longitude } = result
    return { id, location: { latitude, longitude }, ...rest }
  }
})

const stitchCities = fetchNenrich({
  fetch: (data) => data,
  find: ({ country, ...rest } = {}, items) => {
    const result = items.find(it => it.country === country)

    if (!result) return

    return merge(result, rest)
  }
})

const n = i => i.replace(/-/g, '')
const stichCountry = fetchNenrich({
  fetch: fetchCountryData,
  find: ({ id, ...rest } = {}, items) => {
    const exact = items.find(it => it.id === id)
    if (exact) return { ...exact, ...rest, id }

    const partial = items.find(
      it =>
        n(it.id).includes(n(id)) ||
        n(id).includes(n(it.id))
    )
    if (partial) return { ...partial, ...rest, id }
  }
})

;(async () => {
  const countryData = await fetchData('https://www.numbeo.com/cost-of-living/rankings_by_country.jsp')
  const cityData = await fetchData('https://www.numbeo.com/cost-of-living/rankings.jsp')

  const [ , enriched ] = await chainEnrich([
    stichCountry('https://restcountries.eu/rest/v2/all'),
    pivotNdrop('country')
  ], countryData)

  const [ , cities ] = await chainEnrich([
    feCitylocation('./data/worldcities.csv'),
    feLatLong(id => `https://google.com/search?q=${id.replace(/-/g, '+')}+latitude+longitude`),
    pivotNdrop('city location'),
    stitchCities(enriched),
    pivotNdrop('country')
  ], cityData)

  const data = enriched.concat(cities)
  const chunkedData = chunk(data, 500)

  /* Add data to batch */
  // process.stdout.write(JSON.stringify(chunkedData, null, 2))
  await chain(chunkedData.map(d => syncToFirebase.bind({}, d)))

  log(`Done! Synced ${data.length} items`)
})()
