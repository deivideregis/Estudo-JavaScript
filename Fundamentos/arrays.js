const valores = [7.7, 8.9, 6.3, 9.2]
console.log("1ª: ", valores[0], valores[3])
console.log("2ª:", valores[4] == null ? 'posição 4 não encontrado' : valores[4] )

valores[4] = 10
console.log("3ª: ", valores)
console.log("4ª: ", valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log("5ª: ", valores)

console.log("6ª: ", valores.pop())
delete valores[0]
console.log("7ª: ", valores)

console.log("8ª: ", typeof valores)