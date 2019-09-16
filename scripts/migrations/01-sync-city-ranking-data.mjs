import data from '../data/city-rankings.json'
import service from './.key.json'

import { chunkChain } from './utils'
import { toKebabCase } from '../s'
import { pick, compose, map } from 'ramda'

import admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: 'https://project-budgie.firebaseio.com'
})

const toid = (a, b) => `${toKebabCase(a)}-${toKebabCase(b)}`
const toi = compose(
  map(Number),
  pick(
    [
      'cost-of-living-index',
      'restaurant-price-index',
      'groceries-index',
      'rent-index'
    ])
)

const colRef = admin
  .firestore()
  .collection('locations')

const mData = data
  .map(({ country, city, ...rest }) => ({
    city,
    country,
    type: 'city',
    id: toid(country, city),
    i: toi(rest)
  }))

const sync = ({ id, ...data }) => {
  console.log(`Syncing: ${id}`)
  return colRef
    .doc(id)
    .set(data)
    .then(() => {
      console.log(`Done! ${id}`)
      return Promise.resolve()
    })
}

chunkChain(mData, 10, sync)
