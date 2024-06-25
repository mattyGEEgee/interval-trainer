const onButton = document.querySelector('input#on')
const offButton = document.querySelector('input#off')
const pitchSlider = document.querySelector('input#frequency')
const gainSlider = document.querySelector('input#gain')
const printButton = document.querySelector('input#print')
const display = document.querySelector('pre#display')
const numberOfNumbersInput = document.querySelector('input#number-of-numbers')

numberOfNumbersInput.addEventListener('input', (e) => {
    numberOfNumbers = parseInt(e.target.value)
    makeWavetable()
    makeRealAndImagSliders()
    console.log(`numberOfNumbers: ${numberOfNumbers}`);
})

onButton.addEventListener('click', (e) => {
    oscillator.start()
})
offButton.addEventListener('click', (e) => {
    oscillator.stop()
    makeOscillator()
    // window.location.reload() // NOT FINAL (helper)
})
pitchSlider.addEventListener('input', (e) => {
    oscillator.frequency.value = parseInt(e.target.value)
    console.log(`pitch: ${parseInt(e.target.value)}`)
})
gainSlider.addEventListener('input', (e) => {
    gain.gain.value = parseFloat(e.target.value)
    console.log(`gain: ${parseFloat(e.target.value)}`)
})