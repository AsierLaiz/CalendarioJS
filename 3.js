const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…

function drawGift(size, symbol) {
  if (size < 2) return ''

  const topBottom = symbol.repeat(size)
  const middle = symbol + ' '.repeat(size - 2) + symbol

  let result = [topBottom]

  for (let i = 0; i < size - 2; i++) {
    result.push(middle)
  }

  result.push(topBottom)

  return result.join('\n')
}


