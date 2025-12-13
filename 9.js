/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  // Convertir el tablero en matriz, descartando la primera y última línea vacía
  const rows = board.trim().split('\n').map(line => line.split(''))
  const numRows = rows.length
  const numCols = rows[0].length

  // Encontrar la posición inicial del reno (@)
  let posX, posY
  for (let y = 0; y < numRows; y++) {
    const x = rows[y].indexOf('@')
    if (x !== -1) {
      posX = x
      posY = y
      break
    }
  }

  let collected = false

  for (const move of moves) {
    // Calcular nueva posición
    let newX = posX
    let newY = posY

    if (move === 'L') newX--
    if (move === 'R') newX++
    if (move === 'U') newY--
    if (move === 'D') newY++

    // Revisar si se sale del tablero
    if (newX < 0 || newX >= numCols || newY < 0 || newY >= numRows) {
      if (collected) return 'success'
      return 'crash'
    }

    const cell = rows[newY][newX]

    if (cell === '#') {
      if (collected) return 'success'
      return 'crash'
    }

    if (cell === '*') collected = true

    // Actualizar posición
    posX = newX
    posY = newY
  }

  return collected ? 'success' : 'fail'
}


const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada

