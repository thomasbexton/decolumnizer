import './style.css'
import icon from './icon.png' with { type: 'png'}
import * as Formatter from './modules/formatter.js'
import * as UI from './modules/ui.js'

const input = document.getElementById('text-input')
const output = document.getElementById('text-output')
const submit = document.getElementById('submit')

input.addEventListener('input', () => {
    UI.resizeTextAreaHeight(input)
})
submit.addEventListener('click', () => {
    output.textContent = Formatter.format(input.value)
})