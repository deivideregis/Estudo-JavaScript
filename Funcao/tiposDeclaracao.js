console.log(soma(3, 4))

// function declaration - JS carrega primeiro as funções e depois executa
function soma(x, y) {
    return x + y
}

// function expression -- deve carragar a função e então chama
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression -- deve carragar a função e então chama
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))