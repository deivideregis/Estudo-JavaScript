function teste1(num) {
    if(num > 7)
        console.log('1: ' + num)
    
    console.log('2: ' + 'Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle- senão vai imprimir sem independente da condição se for verdade ou falso
        console.log('3: ' + num)
    }
}

teste2(6)
teste2(8)