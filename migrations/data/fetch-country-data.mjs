import fetch from 'node-fetch'
import { id } from './build-id'

export default async (url) => {
  const res = await fetch(url)
  const json = await res.json()

  return json.map(it => ({
    id: id(it.name),
    country: it.name,
    code: it.alpha2Code,
    code3: it.alpha3Code,
    location: {
      region: it.region,
      subregion: it.subregion,
      latitude: it.latlng[0],
      longitude: it.latlng[1]
    },
    localization: {
      timezones: it.timezones,
      demonym: it.demonym
    },
    currency: it.currencies[0],
    altCurrency: it.currencies.slice(1),
    flag: it.flag
  }))
}
