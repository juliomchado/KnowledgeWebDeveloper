// Sintaxe de herança em classe no js
class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // O mesmo seria 'Pai : Avo' em C#, ou seja, Pai herda de Avo, superclasse = Avo, classe = pai
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // super = Instancia a função construtora da superclasse
        this.profissao = profissao

    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

const pai = new Pai('Silvao', 'Jogador')
console.log(pai)
