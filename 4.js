decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)

/**
 * @param {string} code - The code to decipher
 * @returns {string|null} The deciphered PIN
 */
function decodeSantaPin(code) {
  const blocks = code.match(/\[.*?\]/g)
  if (!blocks) return null

  const digits = []

  for (const block of blocks) {
    // Bloque especial [<]
    if (block === '[<]') {
      if (digits.length === 0) continue
      digits.push(digits[digits.length - 1])
      continue
    }

    // Bloque normal [nOP...]
    const content = block.slice(1, -1)
    let value = Number(content[0])

    if (Number.isNaN(value)) continue

    for (const op of content.slice(1)) {
      if (op === '+') value = (value + 1) % 10
      if (op === '-') value = (value + 9) % 10
    }

    digits.push(value)
  }

  return digits.length >= 4
    ? digits.slice(0, 4).join('')
    : null
}


