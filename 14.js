/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {string[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  function helper(obj, path = []) {
    for (const key in obj) {
      const value = obj[key]
      if (value === gift) return [...path, key]
      if (value && typeof value === 'object') {
        const result = helper(value, [...path, key])
        if (result.length) return result
      }
    }
    return []
  }
  
  return helper(workshop)
}
const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

findGiftPath(workshop, 'train')
// ➜ ['storage', 'shelf', 'box1']

findGiftPath(workshop, 'switch')
// ➜ ['storage', 'shelf', 'box2']

findGiftPath(workshop, 'car')
// ➜ ['storage', 'box']

findGiftPath(workshop, 'doll')
// ➜ ['gift']

findGiftPath(workshop, 'plane')
// ➜ []