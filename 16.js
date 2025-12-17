/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed or null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0

  let sleighs = 0
  let currentWeight = 0

  for (const gift of gifts) {
    // Si un regalo no cabe ni solo → null
    if (gift > maxWeight) return null

    // Si cabe en el trineo actual, se suma
    if (currentWeight + gift <= maxWeight) {
      currentWeight += gift
    } else {
      // Si no cabe, enviamos el trineo actual (aunque esté vacío)
      sleighs++
      currentWeight = gift
    }
  }

  // Contar el último trineo si quedó con regalos
  if (currentWeight > 0) sleighs++

  return sleighs
}
packGifts([2, 3, 4, 1], 5)
// 2 trineos
// Trineo 1: 2 + 3 = 5
// Trineo 2: 4 + 1 = 5

packGifts([3, 3, 2, 1], 3)
// 3 trineos
// Trineo 1: 3
// Trineo 2: 3
// Trineo 3: 2 + 1 = 3

packGifts([1, 1, 1, 1], 2)
// 2 trineos
// Trineo 1: 1 + 1 = 2
// Trineo 2: 1 + 1 = 2

packGifts([5, 6, 1], 5)
// null
// Hay un regalo de peso 6 que no cabe

packGifts([], 10)
// 0 trineos
// No hay regalos que entregar