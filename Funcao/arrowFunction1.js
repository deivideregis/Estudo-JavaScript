let dobro = function (a) {
    return 2 * a
}

// ou ********************************

dobro = (a) => {
    return 2 * a 
}

// ou ********************************

dobro = a => 2 * a // return implícito

//***************************************

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
//** ou *********************************
ola = _ => 'Olá' // possui um param

console.log(ola())