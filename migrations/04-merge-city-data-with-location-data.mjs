import fetchData from './data/fetch-rankings'
import parse from 'csv-parse/lib/sync'
import fs from 'fs'

import v from 'voca'
import { map } from 'ramda'

;(async () => {
  const cities = await fetchData('https://www.numbeo.com/cost-of-living/rankings.jsp')
  const locations = parse(fs.readFileSync('./data/worldcities.csv', 'utf-8'), { columns: true })
  const mapped = locations
    .reduce((
      acc,
      { cityascii, country, ...rest }
    ) => ({
      ...acc,
      [v.kebabCase(`${country}-${cityascii}`)]: rest
    }), { })

  const result = cities.map((it) => {
    if (!mapped[it.id]) return it
    return {
      ...it,
      location: {
        latitude: mapped[it.id].lat,
        longitude: mapped[it.id].lng,
      }
    }
  })

  console.dir(JSON.stringify(result))
})()
