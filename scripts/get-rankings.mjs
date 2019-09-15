import fs from 'fs'
import t2json from 'tabletojson'
import { map, compose } from 'ramda'
import { keysToKebabCase } from './utils'

const tabletojson = (url) => new Promise((resolve) => t2json.convertUrl(url, (res) => resolve(res)))
const enrichLocation = ({ city, ...rest }) => {
  if (!city) return { city, ...rest }

  let [ c, state, country ] = city.split(',')
  return {
    ...rest,
    city: c.trim(),
    state: country ? state.trim() : '',
    country: country ? country.trim() : state.trim()
  }
}

const fetchTable = async (url, output, pickResult = ([i]) => i) => {
  const results = await tabletojson(url)
  const result = pickResult(results)

  const processed = map(compose(
    enrichLocation,
    keysToKebabCase
  ), result)

  await fs.writeFile(output, JSON.stringify(processed, null, 2))
  console.log('Done!')
}

fetchTable('https://www.numbeo.com/cost-of-living/rankings.jsp', 'data/city-rankings.json', ([, , i]) => i)
fetchTable('https://www.numbeo.com/cost-of-living/rankings_by_country.jsp', 'data/country-rankings.json', ([, , i]) => i)
