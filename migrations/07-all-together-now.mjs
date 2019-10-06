import fetch from 'node-fetch'
import currencies from './data/currency-symbols.json'
import all from './data/final.json'

import { reduce, find, match } from 'ramda'

const addCurrency = (ind) => {
  Object.values(currencies['symbols'])
}

const tap = (e) => {

  // find(Object.values(currencies))
  // currencies.fin
  // console.log(e['country'])
  return e['country']
}

(() => {
  // console.log(all.map(tap))
  all.map((fin) => {

    return find((e) => {
      if(e.name.match(/${fin.country}/i)) {
        console.log('in here', e)
        return e
      } else {
        console.log('no match', e.name)
      }
    }, Object.values(currencies))

  })


  // console.log(Object.values(currencies))
})()
