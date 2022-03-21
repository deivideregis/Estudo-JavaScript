const nome = 'Rebeca'
const saudacao = ' Viva!'
const concatenacao = 'Olá ' + nome + '!' + saudacao
const template = `Olá ${nome}! Tudo bem?`

console.log('1ª', concatenacao)

console.log('2ª', template)

// expressoes...
console.log('3ª',`1 + 2 = ${1 + 2}`)

const up = texto => texto.toUpperCase()

console.log('4ª',`Ei... ${up('cuidado')}!`)