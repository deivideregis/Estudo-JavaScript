const peso1 = 1.0
const peso2 = Number('2.0')

console.log('1ª: ', peso1, peso2)
console.log('2ª: ', Number.isInteger(peso1))
console.log('3ª: ', Number.isNaN(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('4ª: ', media.toFixed(2))
console.log('5ª: ', media.toString(2)) // em binário
console.log('6ª: ', media) // em binário
console.log('7ª: ', typeof media)
console.log('8ª: ', typeof Number)