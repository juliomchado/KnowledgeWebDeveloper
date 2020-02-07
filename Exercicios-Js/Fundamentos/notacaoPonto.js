// . 

console.log(Math.ceil(6.1)) //Math.ceil = Arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' // Não é notação ponto e não é recomendado.
console.log(obj1.nome) //Serve pros 2 tipos de atribuição ^

function Obj(nome){
    this.nome = nome //O this.nome será um atributo publico, posso criar funções publicas assim também
    this.exec = function(){ //Função tornada publica
    console.log("Exec...")
    }
}

const obj2 = new Obj('Cadeira') // new = instanciar objeto
const obj3 = new Obj('Mesa')
console.log(obj2.nome) 
console.log(obj3.nome)
obj3.exec()