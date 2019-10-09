import fetchData from './data/fetch-rankings'
import fetchLocation from './data/fetch-locations'
import fetchLatLong from './data/fetch-lat-long'
import { fetchCodes, fetchSymbols } from './data/fetch-currency-codes'

const log = console.log.bind(console)
const enrichLocData = (countryData, locData) => countryData
  .reduce(([locs, nocs], { id, ...data }) => {
    return locData[id]
      ? [locs.concat({ id, ...data, ...locData[id] }), nocs]
      : [locs, nocs.concat({ id, ...data })]
  }, [[], []])

;(async () => {
  const countryData = await fetchData('https://www.numbeo.com/cost-of-living/rankings_by_country.jsp')

  // First pass of enriching location data
  const p0LocData = await fetchLocation('https://developers.google.com/public-data/docs/canonical/countries_csv')
  const [ p0Merged, p0Remaining ] = enrichLocData(countryData, p0LocData)

  // Second pass using Google answer box scraping
  const p1LocData = await fetchLatLong(p0Remaining, id => `https://google.com/search?q=${id.replace(/-/g, '+')}+latitude+longitude`)
  const [ p1Merged, p1Remaining ] = enrichLocData(p0Remaining, p1LocData)

  // Third pass using geodatos scraping
  const p2LocData = await fetchLatLong(p1Remaining, id => `https://www.geodatos.net/en/coordinates/${id}`)
  const [ p2Merged, notfound ] = enrichLocData(p1Remaining, p2LocData)

  if (notfound.length) log(`Unable to find location data for the following:`, notfound)

  const locEnriched = [
    ...p0Merged,
    ...p1Merged,
    ...p2Merged
  ]

  // Enrich with Currency code
  const currencyData = await fetchCodes('https://www.nationsonline.org/oneworld/currencies.htm')
  const [ curEnriched, curNotfound ] = locEnriched.reduce(([curs, nurs], { id, ...data }) => {
    let result = currencyData.find((it) => it.id === id)
    if (!result) result = currencyData.find((it) => it.id.includes(id) || id.includes(it.id))
    if (!result) return [ curs, nurs.concat({ id, ...data }) ]

    const { id: _, ...currency } = result
    return [ curs.concat({ id, ...data, currency }), nurs ]
  }, [[], []])

  if (curNotfound.length) log(`Unable to find currency data for the following:`, curNotfound.map(_ => _.country))

  const currencySymbolData = await fetchSymbols('https://justforex.com/education/currencies')
  const [ symbEnriced, symbNotfound ] = curEnriched.reduce(([symbs, nymbs], { currency, ...rest }) => {
    let result = currencySymbolData.find((it) => currency.code === it.code)
    if (!result) result = currencySymbolData.find((it) => it.name.includes(currency.name) || currency.name.includes(it.name))
    return result
      ? [ symbs.concat({ ...rest, currency: { ...currency, ...result } }), nymbs ]
      : [ symbs, nymbs.concat({ currency, ...rest }) ]
  }, [[], []])

})()
