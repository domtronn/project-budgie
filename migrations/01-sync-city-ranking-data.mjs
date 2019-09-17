import fetchData from './data/fetch-rankings'

import { batch, collection } from './utils/firestore'

const b = batch()
const log = console.log.bind(console)

;(async () => {
  const data = await fetchData('https://www.numbeo.com/cost-of-living/rankings.jsp')

  /* Add data to batch */
  data.forEach(({ id, ...data }) => {
    log(`Syncing: ${id}`)
    b.set(
      collection('locations').doc(id),
      data
    )
  })

  // Commit batch
  await b.commit()

  log(`Done! Synced ${data.length} items`)
})()
