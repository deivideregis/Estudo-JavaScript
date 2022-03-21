let valor // não inicializada
console.log("1ª", valor)

valor = null // ausência de valor
console.log("2ª", valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log("3ª", produto.preco)
console.log("4ª", produto)

produto.preco = 3.50
console.log("5ª", produto)

produto.preco = undefined // evite atribuir undefined
console.log("6ª", !!produto.preco)
// delete produto.preco
console.log("7ª", produto)

produto.preco = null // sem preço
console.log("8ª", !!produto.preco)
console.log("9ª", produto)