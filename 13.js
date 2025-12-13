runFactory([
  '>>.'
]) // 'completed'

runFactory([
  '>>>'
]) // 'broken'

runFactory([
  '>><'
]) // 'loop'

runFactory([
  '>>v',
  '..<'
]) // 'completed'

runFactory([
  '>>v',
  '<<<'
]) // 'broken'

runFactory([
  '>v.',
  '^..'
]) // 'completed'

runFactory([
  'v.',
  '^.'
]) // 'loop'

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const rows = factory.length
  const cols = factory[0].length
  let x = 0
  let y = 0
  const visited = new Set()

  while (true) {
    const key = `${y},${x}`

    // Detectar loop
    if (visited.has(key)) return 'loop'
    visited.add(key)

    const cell = factory[y][x]

    // Salida correcta
    if (cell === '.') return 'completed'

    // Mover según dirección
    switch(cell) {
      case '>': x++; break
      case '<': x--; break
      case '^': y--; break
      case 'v': y++; break
      default: return 'broken'
    }

    // Verificar fuera de tablero
    if (x < 0 || x >= cols || y < 0 || y >= rows) return 'broken'
  }
}

