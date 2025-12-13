/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  const rows = warehouse.length
  if (rows === 0) return 0
  const cols = warehouse[0].length
  let count = 0

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (warehouse[y][x] !== '*') continue

      // Revisar las 4 direcciones
      const up = y > 0 ? warehouse[y-1][x] : null
      const down = y < rows - 1 ? warehouse[y+1][x] : null
      const left = x > 0 ? warehouse[y][x-1] : null
      const right = x < cols - 1 ? warehouse[y][x+1] : null

      if (up !== '#' && down !== '#' && left !== '#' && right !== '#') {
        count++
      }
    }
  }

  return count
}


findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara

