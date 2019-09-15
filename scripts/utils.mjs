import { map, over, lensIndex, compose, curry, fromPairs, toPairs } from 'ramda'
import { toKebabCase } from './s'

const _mapToHead = (f) => over(lensIndex(0), f)
const _mapToKeys = (f, obj) => compose(fromPairs, map(_mapToHead(f)), toPairs)(obj)
export const mapToKeys = curry(_mapToKeys)

export const keysToKebabCase = (obj) => mapToKeys(toKebabCase, obj)
