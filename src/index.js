// import './style.css'
import icon from './icon.png' with { type: 'png'}
import * as Formatter from './modules/formatter.js'

const input = document.getElementById('text-input')
const output = document.getElementById('text-output')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    output.textContent = Formatter.format(input.value)
})
