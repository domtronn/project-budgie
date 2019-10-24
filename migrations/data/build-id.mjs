import v from 'voca'
import { map, compose, join } from 'ramda'
import { CountryIdMap } from '../utils/constants'

export const id = compose(
  i => CountryIdMap[i] || i,
  join('-'),
  map(v.kebabCase),
  map(i => i.replace(/[\(\)]/g, '')),
  (...a) => a
)
