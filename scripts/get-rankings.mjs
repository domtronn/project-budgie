import fs from 'fs'
import t2json from 'tabletojson'
import { map, compose } from 'ramda'
import { keysToKebabCase } from './utils'

const tabletojson = (url) => new Promise((resolve) => t2json.convertUrl(url, (res) => resolve(res)))
const enrichLocation = ({ city, ...rest }) => {
  let [ c, state, country ] = city.split(',')
  return {
    ...rest,
    city: c.trim(),
    state: country ? state.trim() : '',
    country: country ? country.trim() : state.trim()
  }
}

;(async () => {
  const [, , result] = await tabletojson('https://www.numbeo.com/cost-of-living/rankings.jsp')
  const processed = map(compose(
    enrichLocation,
    keysToKebabCase
  ), result)

  await fs.writeFile('output.json', JSON.stringify(processed, null, 2))
  console.log('Done!')
})()
