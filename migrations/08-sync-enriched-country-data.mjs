import fetchData from './data/fetch-rankings'
import fetchLocation from './data/fetch-locations'
import fetchLatLong from './data/fetch-lat-long'
import fetchExchange from './data/fetch-exchange'
import { fetchCodes, fetchSymbols } from './data/fetch-currency-codes'

const log = console.log.bind(console)

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

const chainEnrich = async (fs, data) => fs.reduce((acc, it) => acc.then(it), Promise.resolve([[], data]))
const pivot = (fromtype) => async ([ enriched, notfound = [] ]) => {
  if (notfound.length) log(`Unable to find ${fromtype} data for:`, notfound.map(_ => _.id))
  log(`Finished enriching ${fromtype} data`)
  return [ [], [...enriched, ...notfound] ]
}

const feLocation = fetchNenrich({ fetch: fetchLocation, find: ({ id }, l) => l[id] })
const feLatLong = fetchNenrich({ fetch: fetchLatLong, find: ({ id }, l) => l[id] })
const feCurrency = fetchNenrich({
  fetch: fetchCodes,
  find: ({ id } = {}, items) => {
    const result = items.find(it => it.id === id) ||
      items.find(it => it.id.includes(id) || id.includes(it.id))

    if (!result) return

    const { id: _, ...currency } = result
    return { currency }
  }
})

const feSymbols = fetchNenrich({
  fetch: fetchSymbols,
  find: ({ currency }, items) => {
    if (!currency) return

    const found = items.find(it => it.code === currency.id) ||
          items.find(it => it.name.includes(currency.name) || currency.name.includes(it.name))

    if (!found) return

    return { currency: { ...currency, ...found } }
  }
})

;(async () => {
  const countryData = await fetchData('https://www.numbeo.com/cost-of-living/rankings_by_country.jsp')

  /* Enrich data with Lat / Long location */
  const [ enriched ] = await chainEnrich([
    feLocation('https://developers.google.com/public-data/docs/canonical/countries_csv'),
    feLatLong(id => `https://google.com/search?q=${id.replace(/-/g, '+')}+latitude+longitude`),
    feLatLong(id => `https://www.geodatos.net/en/coordinates/${id}`),
    pivot('location'),
    feCurrency('https://www.nationsonline.org/oneworld/currencies.htm'),
    pivot('currency'),
    feSymbols('https://justforex.com/education/currencies'),
    pivot('symbols')
  ], countryData)

  log(enriched)

  // process.stdout.write(JSON.stringify(enriched, null, 2))
})()
