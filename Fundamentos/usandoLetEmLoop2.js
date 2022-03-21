const funcs = []

//se for var vair ser sempre 10 e usando let e exibido a posição
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()