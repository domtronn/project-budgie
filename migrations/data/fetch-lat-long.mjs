import fetch from 'node-fetch'

const answerRE = /[0-9]{1,3}\.[0-9]{4}[�°] [NS][, ]+[0-9]{1,3}\.[0-9]{4}[�°] [WE]/

const fetchLatLong = (buildUri) => async ({ id }) => {
  const url = buildUri(id)

  const data = await fetch(url)
  const text = await data.text()

  const [ match ] = text.match(answerRE) || []
  if (!match) return

  const [ latitude, longitude ] = match
    .split(/[, ]/)
    .map(i => i.match(/[0-9]{1,3}\.[0-9]{4}/))
    .filter(i => i)
    .map(([i]) => i)

  return { id, latitude, longitude }
}

export default async (buildUri, items) => {
  const locData = await Promise.all(
    items.map(fetchLatLong(buildUri))
  )

  return locData.reduce(
    (acc, it) => {
      if (!it) return acc

      const { id, ...location } = it
      return { ...acc, [id]: location }
    }, {})
}
