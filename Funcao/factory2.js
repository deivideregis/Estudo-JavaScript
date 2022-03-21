function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        empresa: 'Aliare',
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
console.log(criarProduto('Mouse', 56.80))