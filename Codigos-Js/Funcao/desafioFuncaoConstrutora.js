//Criando uma função construtora apartir de uma classe

class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() 

console.log('=============================================')

function Pessoa2(nome) {
    this.nome = nome

    this.falar = () =>{
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p2 = new Pessoa2('João2')
p2.falar() 

