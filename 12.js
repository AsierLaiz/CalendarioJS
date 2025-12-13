elfBattle('A', 'B')
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

elfBattle('F', 'B')
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle('AAB', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle('AFA', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle('AFAB', 'BBAF')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle('AA', 'FF')
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2

/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let hp1 = 3
  let hp2 = 3
  const rounds = Math.max(elf1.length, elf2.length)

  for (let i = 0; i < rounds; i++) {
    const move1 = elf1[i] || ''
    const move2 = elf2[i] || ''

    let dmg1 = 0
    let dmg2 = 0

    // Daño del Elfo 1 a Elfo 2
    if (move1 === 'A' && move2 !== 'B') dmg2 += 1
    if (move1 === 'F') dmg2 += 2

    // Daño del Elfo 2 a Elfo 1
    if (move2 === 'A' && move1 !== 'B') dmg1 += 1
    if (move2 === 'F') dmg1 += 2

    hp1 -= dmg1
    hp2 -= dmg2

    // Revisar fin de batalla inmediato
    if (hp1 <= 0 && hp2 <= 0) return 0
    if (hp1 <= 0) return 2
    if (hp2 <= 0) return 1
  }

  // Si ninguno murió, revisar empate o victoria
  if (hp1 > hp2) return 1
  if (hp2 > hp1) return 2
  return 0
}


