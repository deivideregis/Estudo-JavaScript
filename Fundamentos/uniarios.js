let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //realiza operação primeiro
console.log(num1)

console.log(++num1 === num2--) //evitar usar dessa forma, pois será verdadeira, pois num2-- vai ser calculado depois realizar operacao ++num1 === num2
console.log(num1 === num2)