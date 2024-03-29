import v from 'voca'
import t from 'tabletojson'
import { map, compose, pick } from 'ramda'

import { id } from './build-id'
import { mapToKeys } from '../utils'
import { Types, Indices } from '../utils/constants'

const tabletojson = url => new Promise((resolve) => t.convertUrl(url, resolve))

const idFormat = v.camelCase
const keysToKebab = mapToKeys(idFormat)
const indexData = compose(map(Number), pick(map(idFormat, Indices)))

const enrichData = ({ city = '', ...rest }) => {
  const [ c = '', _s = '', _c = '' ] = city.split(',')
  const country = _c ? _c.trim() : _s.trim()

  return city
    ? { name: `${city}`, index: indexData(rest), type: Types.CITY, city: c.trim(), id: id(country, c), country }
    : { name: `${rest.country}`, index: indexData(rest), type: Types.COUNTRY, id: id(rest.country), country: rest.country }
}

export default async (url) => {
  const [, , result] = await tabletojson(url)

  return map(compose(
    enrichData,
    keysToKebab
  ), result)
}
