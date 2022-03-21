{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

//mesmo dentro da chave, tem acesso
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()

//quando definido fora da função - ocorre erro
console.log(local)