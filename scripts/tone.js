const Tone = require('Tone')
var synth = new Tone.PolySynth().toMaster()

Tone.Transport.bpm.value = 107

const play = (notes) => notes.reduce((acc, [ note, dur ]) => {
  synth.triggerAttackRelease(note, dur, acc)
  return acc + Tone.Time(dur)
}, Tone.Time('8n'))

play([
  ['E4', '8n'],
  ['F4', '16n'],
  ['G4', '8n'],
  ['C5', '2n'],
  ['D4', '8n'],
  ['E4', '16n'],
  ['F4', '1n'],

  ['G4', '8n'],
  ['A4', '16n'],
  ['B4', '8n'],
  ['F5', '2n'],

  ['A4', '8n'],
  ['B4', '16n'],
  ['C5', '8n'],
  ['D5', '8n'],
  ['E5', '8n']
])
