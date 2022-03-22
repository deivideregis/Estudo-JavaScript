// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log('1: ', pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log('2: ',pessoa.nome)
console.log('3: ',pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log('4: ',pessoaConstante)