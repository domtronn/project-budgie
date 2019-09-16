import data from '../data/city-rankings.json'
import service from './.key.json'
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

const syncTo = (col, { id, ...data }) => {
  console.log(`Syncing: ${id}`)
  return col
    .doc(id)
    .set(data)
    .then(() => {
      console.log(`Done! ${id}`)
      return Promise.resolve()
    })
}

data
  .map(({ country, city, ...rest }) => ({ country, city, id: toid(country, city), i: toi(rest) }))
  .reduce((p, data) => p.then(syncTo(colRef, data)), Promise.resolve())
