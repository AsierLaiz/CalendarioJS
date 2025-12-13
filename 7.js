drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Character to use as ornament
 * @param {number} frequency - How often ornaments appear
 * @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let treeLines = []
  let position = 1 // Contador de posiciones desde la copa

  for (let i = 1; i <= height; i++) {
    const starsCount = 2 * i - 1
    const spaces = ' '.repeat(height - i)
    let line = ''

    for (let j = 1; j <= starsCount; j++) {
      if (position % frequency === 0) {
        line += ornament
      } else {
        line += '*'
      }
      position++
    }

    treeLines.push(spaces + line)
  }

  // Tronco centrado
  const trunk = ' '.repeat(height - 1) + '#'
  treeLines.push(trunk)

  return treeLines.join('\n')
}



