import fetch from 'node-fetch'
import { toPairs, reduce, omit } from 'ramda'
import { batch, collection } from './utils/firestore'
const b = batch()
const log = console.log.bind(console)

// import exchange from './data/currencies.json'

/*
EUR -> GBP = 0.8879
GBP -> EUR = 1.1266 (1 / 0.8879)

EUR -> CAD = 1.4606
GBP -> CAD = 1.645 (1.4606 / 0.8879)

EUR -> ZAR = 16.6077
GBP -> ZAR = 18.7044712242 (16.6077 / 0.8879)
*/

// We are on a restricted plan that only allows us to do EUR, so manually convert
const convertRatesToGBP = (rates) => {
  const eur_to_gbp = rates['GBP']

  return reduce((acc, [ k,v ]) => {
    acc[k] = v / eur_to_gbp
    return acc
  }, {}, toPairs(rates))
}

(async () => {
  const url = 'http://data.fixer.io/api/latest?access_key=dd2688d5db2b3ba58d074aa06c93a20d&format=1'

  const data = await fetch(url)
  const exchange  = await data.json()
  const newExchange = omit(['success'], {...exchange, rates: convertRatesToGBP(exchange.rates), base: 'GBP' })

  b.set(
    collection('exchange').doc(newExchange['date']),
    newExchange
  )

  log('this is b', b)

  b.commit().then((r) => {
    log('did it work?', r)
  }).catch((err) => {
    log('did it work? no!', err)
  })

})().catch((err) => console.log('err', err))
