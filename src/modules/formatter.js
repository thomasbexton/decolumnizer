//TODO: Add rules as exceptions arise. Refactor when needed.
function format(str) {
    return str.replaceAll(/(?<![.A-Z])\n(?=[a-z0-9])/gm, ' ')
}

export {
    format
}
