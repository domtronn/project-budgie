import fetchData from './data/fetch-rankings'
import fetchLocation from './data/fetch-locations'

const log = console.log.bind(console)

;(async () => {
  const countryData = await fetchData('https://www.numbeo.com/cost-of-living/rankings_by_country.jsp')
  const locData = await fetchLocation('https://developers.google.com/public-data/docs/canonical/countries_csv')

  /* Add data to batch */
  const merged = countryData.map(({ id, ...data }) => {
    log(`Syncing: ${id}`)
    return { id, ...data, ...locData[id] }
  })

  console.dir(merged, { maxArrayLength: null })
})()
