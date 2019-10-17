import { batch, database, firestore, collection } from './utils/firestore'
import { map, reduce, identity } from 'ramda'
const log = console.log.bind(console)

const b = batch()

const getfromStore = async () => {
  const exchange = await firestore().collection('exchange').get()
  const rates = exchange.docs.map(e => e.data())
  const v = reduce((m, e) => {
    m[e.timestamp] = e.rates
    return m
  }, {}, rates)

  const d = reduce((m, [time, rate]) => {
    map(([k,v]) => {
      m[k] = [...m[k] || [], {timestamp: time, value: v}]
    }, Object.entries(rate))
    return m
  }, {}, Object.entries(v))

  return d
}

const saveToFirebase = async () => {
  const data = await getfromStore()
  const setting = map((code, rates) => {
    return b.set(
      collection('rates').doc(code),
      rates
    )
  }, Object.entries(data))

  await Promise.all(setting)

  b.commit().then((r) => {
    log('success', r)
  }).catch((err) => {
    log('error', err)
  })
}

saveToFirebase()