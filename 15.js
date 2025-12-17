drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
)
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+

/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
function drawTable(data, sortBy) {
  if (!data.length) return ''

  const keys = Object.keys(data[0])

  // Ordenar los datos
  const sorted = [...data].sort((a, b) => {
    const v1 = a[sortBy]
    const v2 = b[sortBy]

    if (typeof v1 === 'number' && typeof v2 === 'number') {
      return v1 - v2
    }
    return String(v1).localeCompare(String(v2))
  })

  // Calcular anchos de columnas
  const widths = keys.map(key =>
    Math.max(
      ...sorted.map(row => String(row[key]).length),
      1 // para la cabecera (A, B, C...)
    )
  )

  // Construir separadores
  const separator = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+'

  // Cabecera A, B, C...
  const header =
    '| ' +
    widths
      .map((w, i) => String.fromCharCode(65 + i).padEnd(w, ' '))
      .join(' | ') +
    ' |'

  // Filas
  const rows = sorted.map(row =>
    '| ' +
    keys
      .map((key, i) => String(row[key]).padEnd(widths[i], ' '))
      .join(' | ') +
    ' |'
  )

  return [
    separator,
    header,
    separator,
    ...rows,
    separator
  ].join('\n')
}
