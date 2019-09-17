import data from './data/city-rankings.json'

import { Indices, Types } from './utils/constants'
import { batch, collection } from './utils/firestore'

import v from 'voca'
import { pick, compose, map, join } from 'ramda'

const toid = compose(join('-'), map(v.kebabCase))
const toi = compose(map(Number), pick(Indices))

const b = batch()
const log = console.log.bind(console)

/* Modify data and add to batch */
data
  .map(
    ({ country, city, ...rest }) => ([
      toid([ country, city ]),
      {
        city,
        country,
        type: Types.CITY,
        i: toi(rest)
      }
    ])
  )
  .forEach(([id, data]) => {
    log(`Syncing: ${id}`)
    b.set(
      collection('locations').doc(id),
      data
    )
  })

/* Commit batch */
b
  .commit()
  .then(i => log(`Done! Synced ${data.length} items`))
