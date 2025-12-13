/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const counts = {} // { color: { L: x, R: y } }
  const pairs = []

  for (const glove of gloves) {
    const { hand, color } = glove

    if (!counts[color]) counts[color] = { L: 0, R: 0 }

    // Si hay un guante opuesto disponible, hacemos el par
    if (hand === 'L' && counts[color].R > 0) {
      counts[color].R--
      pairs.push(color)
    } else if (hand === 'R' && counts[color].L > 0) {
      counts[color].L--
      pairs.push(color)
    } else {
      counts[color][hand]++
    }
  }

  return pairs
}
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']