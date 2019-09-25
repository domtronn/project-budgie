var synth = new Tone
  .PolySynth()
  .toMaster()

Tone
  .Transport
  .bpm
  .value = 127

/* Simple helper function that takes integer */
const n = (t, type = 'n') => Tone.Time(`${t}${type}`)

/* Dotted notes are the length of the note + 1/2 */
const d = (t) => n(t) + n(t * 2)

/* Simple wrapper for triplet] */
const tr = (t) => n(t, 't')

const t = (...times) => times.reduce((acc, it) => n(it) + acc, 0)
const play = (notes, start = '8n') => notes.reduce((acc, [ note, dur ]) => {
  synth.triggerAttackRelease(note, dur, acc)
  return acc + Tone.Time(dur)
}, Tone.Time(start))

const pre = [
  ['E4', d(8)],
  ['F4', t(16)]
]

const end1 = [
  ['E5', t(4)],
  ['D5', d(8)],

  ['G4', t(16)],
  ['E5', t(8)],
  ['D5', t(8)],

  ['E4', d(8)],
  ['F4', t(16)]
]

const end2 = [
  ['E5', t(4)],
  ['D5', d(8)],

  ['G4', t(16)],
  ['E5', t(8)],
  ['D5', t(8)],

  ['E4', d(8)],
  ['G4', t(16)]
]

const repeat = [
  ['G4', t(8)],
  ['C5', d(4) + t(4)],

  ['D4', d(8)],
  ['E4', t(16)],
  ['F4', d(2)],

  ['G4', d(8)],
  ['A4', t(16)],
  ['B4', t(8)],
  ['F5', d(4) + t(4)],

  ['A4', d(8)],
  ['B4', t(16)],
  ['C5', t(4)],
  ['D5', t(4)],
  ['E5', t(4)],

  ['E4', d(8)],
  ['F4', t(16)],
  ['G4', t(8)],
  ['C5', d(4) + t(4)],

  ['D5', d(8)],
  ['E5', t(16)],
  ['F5', d(2)],

  ['G4', d(8)],
  ['G4', t(16)],
  ['E5', t(4)],
  ['D5', d(8)],

  ['G4', t(16)],
  ['E5', t(4)],
  ['D5', d(8)],

  ['G4', t(16)]
]

const after = [
  ['F4', d(2)],
  ['D4', d(8)],
  ['F4', t(16)],
  ['E4', tr(8)],
  ['G4', tr(8)],
  ['E5', tr(8) + t(2)],

  ['E4', d(8)],
  ['G4', t(16)],
  ['F4', d(2)],
  ['D4', d(8)],
  ['F4', t(16)],
  ['E4', tr(8)],
  ['G4', tr(8)],
  ['E5', tr(8) + t(2)],

  ['D5', d(8)],
  ['E5', t(16)],
  ['F5', d(2)],
  ['D5', d(8)],
  ['F5', t(16)],

  ['D#5', tr(8)],
  ['D5', tr(8)],
  ['C5', tr(8) + t(2)]

]

play([
  // ...pre,
  // ...repeat,
  // ...end1,
  // ...repeat,
  ...end2,
  ...after
])
