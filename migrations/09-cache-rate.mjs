import { database, firestore } from './utils/firestore'

const getfromStore = async () => {
  const exchange = await firestore().collection('exchange').get()
  const rates = exchange.docs.map(e => e.data())

  console.log(rates)
}

getfromStore()
