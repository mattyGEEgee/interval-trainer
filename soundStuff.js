const audioContext = new window.AudioContext

// making wavetable
let realNumbers = new Float32Array(12)
for (let i in realNumbers) {
    realNumbers[i] = 1
}
let imagNumbers = new Float32Array(12)
for (let i in imagNumbers) {
    imagNumbers[i] = 0
}
const wavetable = new PeriodicWave(audioContext, {
    real: realNumbers,
    imag: imagNumbers
})

// oscillator
const oscillator = new OscillatorNode(audioContext, {
    periodicWave: wavetable,
    frequency: 440,
})
// gain
const gain = new GainNode(audioContext, {
    gain: 0.5
})