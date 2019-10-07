import fetch from 'node-fetch'
import currencies from './data/currency-symbols.json'
import all from './data/final.json'

import { reduce, filter } from 'ramda'

import v from 'voca'


(() => {
  const doesMatch = f => n => {
    return v.matches(v.substring(n.name, 0, 5), v.substring(f.country, 0, 5), 'i')
  };

  const withCou = all.map((fin) => {
    var match = filter(doesMatch(fin), Object.values(currencies))[0]
    if(match) {
      return {...fin, ...match }
    } else {
      {}
    }
  })

  console.log(withCou)
})()
