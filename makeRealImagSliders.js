let numberOfNumbers = 2

function makeRealAndImagSliders() {
    const divRealNumbers = document.querySelector('div#real-numbers')

    // remove all children first
    while (divRealNumbers.firstChild) {
        divRealNumbers.removeChild(divRealNumbers.lastChild);
    }
    // recreate children
    for (let i = 1; i < numberOfNumbers; i++) {
        let slider = document.createElement('input')
            slider.type = "range"
            slider.id = `real-${i}`
            slider.name = `real-${i}`
            slider.min = 0 
            slider.max = 10
            slider.step = 0.1
            if (i == 1) {
                slider.value = 10
            } else {
                slider.value = 0
            }
        divRealNumbers.appendChild(slider)
    }

    // addEventListeners
    const realNumberSliders = document.querySelectorAll('#real-numbers input[type=range]')

    realNumberSliders.forEach((i) => {
        i.addEventListener('input', (e) => {
            console.log(`${i.name}: ${e.target.value}`);
            realNumbers[(i.name).slice(-2).replace('-', '')] = parseFloat(e.target.value)
            wavetable = new PeriodicWave(audioContext, {
                real: realNumbers,
                imag: imagNumbers
            })
            oscillator.setPeriodicWave(wavetable)

            // update <pre></pre>
            let text
            for (let i = 1; i < numberOfNumbers; i++) {
                text += `\nreal ${i}: ${realNumbers[i]}`.slice(0,13)
            }
            display.textContent = text
        })
    })
}