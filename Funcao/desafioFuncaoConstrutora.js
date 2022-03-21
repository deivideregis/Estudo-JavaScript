function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const p2 = new Pessoa('Pedro')
p2.falar()


console.log(p1.nome)

console.log('Meu nome é ' + p2.nome)