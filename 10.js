/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic, or -1 if invalid
 */
function maxDepth(s) {
  let depth = 0
  let maxDepth = 0

  for (const char of s) {
    if (char === '[') {
      depth++
      if (depth > maxDepth) maxDepth = depth
    } else if (char === ']') {
      depth--
      if (depth < 0) return -1 
    }
  }

  // Si quedaron corchetes abiertos
  if (depth !== 0) return -1

  return maxDepth
}


maxDepth('[]') // -> 1
maxDepth('[[]]') // -> 2
maxDepth('[][]') // -> 1
maxDepth('[[][]]') // -> 2
maxDepth('[[[]]]') // -> 3
maxDepth('[][[]][]') // -> 2

maxDepth('][') // -> -1 (cierra antes de abrir)
maxDepth('[[[') // -> -1 (faltan cierres)
maxDepth('[]]]') // -> -1 (sobran cierres)
maxDepth('[][][') // -> -1 (queda uno sin cerrar)

