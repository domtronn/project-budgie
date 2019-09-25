var synth = new Tone
  .PolySynth()
  .toMaster()

Tone
  .Transport
  .bpm
  .value = 127

const n = (t) => Tone.Time(`${t}n`)
const d = (t) => n(t) + n(t * 2)
const t = (...times) => times.reduce((acc, it) => n(it) + acc, 0)
const play = (notes, start = '8n') => notes.reduce((acc, [ note, dur ]) => {
  synth.triggerAttackRelease(note, dur, acc)
  return acc + Tone.Time(dur)
}, Tone.Time(start))

play([
  ['E4', d(8)],
  ['F4', t(16)],
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

  ['G4', t(16)],
  ['E5', t(4)],
  ['D5', d(8)],

  ['G4', t(16)],
  ['E5', t(8)],
  ['D5', t(8)]
])
