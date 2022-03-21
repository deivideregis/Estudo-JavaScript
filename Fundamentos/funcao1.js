// Funcao sem retorno => tratar o erro passando valor
function imprimirSoma(a = 0, b = 0, c = 0) {
    console.log("Lista: ", a + b + c)
}

imprimirSoma(2, 3, 17)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
function soma(a = 0, b = 0) {
    return a + b
}

console.log("5ª: ", soma(2, 3))
console.log("6ª: ", soma(2))
console.log("7ª: ", soma())