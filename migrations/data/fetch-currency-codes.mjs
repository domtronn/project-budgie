import v from 'voca'
import t from 'tabletojson'
import { map, compose } from 'ramda'

import { id } from './build-id'

import { mapToKeys } from '../utils'
const keysToKebab = mapToKeys(v.kebabCase)

const sanitise = s => s.replace(/\n.*/g, '')

const tabletojson = url => new Promise((resolve) => t.convertUrl(url, resolve))

const enrichData = ({ 1: country, 3: code, 2: name }) => ({
  id: id(country),
  code: sanitise(code),
  name: sanitise(name)
})

const enrichSymbolData = ({ currency: code, name, symbol }) => ({ code, symbol, name })

export const fetchCodes = async (url) => {
  const results = await tabletojson(url)

  const final = results.map(result => {
    const enriched = map(compose(
      enrichData
    ), result.filter(({ 1: i }) => i))

    return enriched
  }).reduce((acc, it) => ([ ...acc, ...it ]), [])

  return final
}

export const fetchSymbols = async (url) => {
  const [ result ] = await tabletojson(url)

  const enriched = map(compose(
    enrichSymbolData,
    keysToKebab
  ), result)

  return enriched
}
