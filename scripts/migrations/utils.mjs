export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

export const chain = ps => ps.reduce((p, next) => p.then(next), Promise.resolve())
export const chunkChain = (arr, size, f) => chunk(arr, size)
  .reduce((p, nextChunk) => p.then(() => Promise.all(nextChunk.map(f))), Promise.resolve())
