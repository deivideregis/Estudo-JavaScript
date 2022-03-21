const escola = "Cod3r"

console.log("1ª", escola.charAt(4))
console.log("2ª", escola.charAt(5) == "" ? "não encontrado" : escola.charAt(5))
console.log("3ª", escola.charCodeAt(3))
console.log("4ª", escola.indexOf('3'))

console.log("5ª", escola.substring(1))
console.log("6ª", escola.substring(0, 3))

console.log("7ª", 'Escola '.concat(escola).concat("!"))
console.log("8ª", 'Escola ' + escola + "!")
console.log("9ª", escola.replace(3, 'e'))

console.log("10ª", 'Ana,Maria,Pedro'.split(','))