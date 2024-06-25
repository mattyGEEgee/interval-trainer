const audioContext = new window.AudioContext
let oscillator

// making wavetable
let realNumbers = new Float32Array(numberOfNumbers)
let imagNumbers = new Float32Array(numberOfNumbers)
let wavetable = new PeriodicWave(audioContext, {
    real: realNumbers,
    imag: imagNumbers
})

// modifying wavetable
function makeWavetable() {
    realNumbers = new Float32Array(numberOfNumbers)
    for (let i in realNumbers) {
        if (i == 1) {
            realNumbers[i] = 10 
        } else {
            realNumbers[i] = 0
        }
    }
    imagNumbers = new Float32Array(numberOfNumbers)
    for (let i in imagNumbers) {
        imagNumbers[i] = 0
    }
    wavetable = new PeriodicWave(audioContext, {
        real: realNumbers,
        imag: imagNumbers
    })
}
makeWavetable()

// gain
const gain = new GainNode(audioContext, {
    gain: 0.15
})

// oscillator
function makeOscillator() {
    oscillator = new OscillatorNode(audioContext, {
        periodicWave: wavetable,
        frequency: 440,
    })
    oscillator.connect(gain).connect(audioContext.destination)
}
makeOscillator()