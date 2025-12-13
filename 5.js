/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const toDate = (elfTime) => {
    const [datePart, timePart] = elfTime.replace(' NP', '').split('@')
    const [year, month, day] = datePart.split('*').map(Number)
    const [hour, minute, second] = timePart.split('|').map(Number)

    // Tratar NP como UTC
    return Date.UTC(year, month - 1, day, hour, minute, second) / 1000
  }

  const fromSeconds = toDate(fromTime)
  const takeOffSeconds = toDate(takeOffTime)

  return Math.floor(takeOffSeconds - fromSeconds)
}


const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12