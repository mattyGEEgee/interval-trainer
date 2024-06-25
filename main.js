const onButton = document.querySelector('input#on')
const offButton = document.querySelector('input#off')
const pitchSlider = document.querySelector('input#frequency')
const gainSlider = document.querySelector('input#gain')
const realAndImagSliders = document.querySelectorAll('#imag-numbers input[type=range], #real-numbers input[type=range]')

// oscillator
// gain

realAndImagSliders.forEach((i) => {
    i.addEventListener('input', (e) => {
        console.log(`${i.id}: ${e.target.value}`);
    })
})

onButton.addEventListener('click', (e) => {
    oscillator.start()
})
offButton.addEventListener('click', (e) => {
    oscillator.stop()
    window.location.reload() // NOT FINAL (helper)
})
pitchSlider.addEventListener('input', (e) => {
    oscillator.frequency.value = parseInt(e.target.value)
    console.log(`pitch: ${parseInt(e.target.value)}`)
})
gainSlider.addEventListener('input', (e) => {
    gain.gain.value = parseFloat(e.target.value)
    console.log(`gaing: ${parseFloat(e.target.value)}`)
})


oscillator.connect(gain).connect(audioContext.destination)