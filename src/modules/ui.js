function resizeTextAreaHeight(textArea) {
    const resizeWrapper = textArea.parentElement
    resizeWrapper.dataset.replicatedValue = textArea.value
}

export {
    resizeTextAreaHeight
}
