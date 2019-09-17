import { map, over, lensIndex, compose, curry, fromPairs, toPairs } from 'ramda'

const _apToHead = (f) => over(lensIndex(0), f)
const _apToKeys = (f, obj) => compose(fromPairs, map(_apToHead(f)), toPairs)(obj)

export const mapToKeys = curry(_apToKeys)
