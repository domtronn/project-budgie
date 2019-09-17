import data from './data/country-rankings.json'

import { Indices } from './utils/constants'
import { batch, collection } from './utils/firestore'

import v from 'voca'
import { pick, compose, map } from 'ramda'

const toi = compose(map(Number), pick(Indices))

const b = batch()
const log = console.log.bind(console)

/* Modify data and add to batch */
data
  .map(
    ({ country, ...rest }) => ([
      v.kebabCase(country),
      {
        country,
        type: 'coutnry',
        i: toi(rest)
      }
    ])
  )
  .forEach(([ id, data ]) => {
    log(`Syncing: ${id}`)
    b.set(collection('locations').doc(id), data)
  })

/* Commit batch */
b
  .commit()
  .then(i => log(`Done! Synced ${data.length} items`))
