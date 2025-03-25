//TODO: Add rules as exceptions arise. Refactor when needed.
function format(str) {
    return str.replaceAll(/(?<![.])\n(?=[a-z])/gm, ' ')
}

export {
    format
}
