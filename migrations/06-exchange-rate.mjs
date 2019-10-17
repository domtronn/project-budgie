import fetch from 'node-fetch'
import { toPairs, reduce, omit, times, map } from 'ramda'
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
  const eur_to_gbp = rates['USD']

  return reduce((acc, [ k,v ]) => {
    acc[k] = v / eur_to_gbp
    return acc
  }, {}, toPairs(rates))
}

const getDateAndSave = async (date) => {

  const url = `http://data.fixer.io/api/${date}?access_key=dd2688d5db2b3ba58d074aa06c93a20d&format=1`


  console.log(url)
  const data = await fetch(url)
  const exchange  = await data.json()
  const newExchange = omit(['success'], {...exchange, rates: convertRatesToGBP(exchange.rates), base: 'USD' })

  return b.set(
    collection('exchange').doc(newExchange['date']),
    newExchange
  )
}

const doIt = async () => {
  const start = new Date('2019-10-02')
  const d = () => new Date(start.setDate(start.getDate() + 1)).toISOString().split('T')[0]
  const dates = times(d, 15)
  const ps = map(getDateAndSave, dates)
  await Promise.all(ps)
  b.commit().then((r) => {
    log('did it work?', r)
  }).catch((err) => {
    log('did it work? no!', err)
  })
  console.log('finhere')
}

doIt()



