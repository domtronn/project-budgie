import v from 'voca'
import t from 'tabletojson'
import { map, compose, pick } from 'ramda'

import { id } from './build-id'
import { mapToKeys } from '../utils'
import { Types } from '../utils/constants'

const tabletojson = url => new Promise((resolve) => t.convertUrl(url, resolve))

const listToObj = (list, prop = 'id') => list.reduce((acc, it) => ({ ...acc, [it[prop]]: it }), {})
const keysToKebab = mapToKeys(v.kebabCase)
const indexData = compose(map(Number), pick([ 'latitude', 'longitude' ]))

const enrichData = (data) => ({
  location: indexData(data),
  type: Types.COUNTRY,
  id: id(data.name),
  code: data.country,
  country: data.name
})

export default async (url) => {
  const [result] = await tabletojson(url)

  const enriched = map(compose(
    enrichData,
    keysToKebab
  ), result)

  return listToObj(enriched)
}
