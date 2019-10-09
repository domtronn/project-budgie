import fetch from 'node-fetch'
import currencies from './data/currency-symbols.json'
import t from 'tabletojson'
import all from './data/final.json'
import countryCodes from './data/county_and_code.json'

import { reduce, find, propEq } from 'ramda'

import v from 'voca'

import { batch, collection } from './utils/firestore'
const b = batch()

const log = console.log.bind(console)
const tabletojson = url => new Promise((resolve) => t.convertUrl(url, resolve))
const getData = async () => {
  // const url = 'https://www.iban.com/currency-codes'
  // const countryCodes = await tabletojson(url)

  const objectCurrencies = Object.values(currencies)
  const allData = all.map((e) => {
    const a = find((country) => {
      return country.country === v.lowerCase(e.country)
    })(Object.values(countryCodes))

    if(a) {
      const sym = find(propEq('code', a.code))(objectCurrencies)
      if(!sym) { console.log('cant find sys', a.country, a.code) }
      return { ...e, ...{ currency: {...a, ...sym } } }
    } else {
      return { ...e, ...{ currency: {} } }
    }
  })

  allData.map((d) => {
    b.set(
      collection('locations').doc(d.country),
      d
    )
  })

  log('this is b', b)

  b.commit().then((r) => {
    log('did it work?', r)
  }).catch((err) => {
    log('did it work? no!', err)
  })

}

getData()
