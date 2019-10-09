import v from 'voca'
import { map, compose, join } from 'ramda'

export const id = compose(
  join('-'),
  map(v.kebabCase),
  map(i => i.replace(/\(.*?\)/g, '')),
  (...a) => a
)
