function MeuObjeto(){
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto // Quando se cria um objeto pela função construtora, o prototype aponta para a função que eu criei .prototype
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.__proto__ === obj1.__proto__)


MeuObjeto.prototype.nome = 'Anônimo' // Todos os objetos criado por essa função construtora terá o atributo nome como pai
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}



obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo: 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // new MeuObjeto tem o .__proto pois o resultado dele é um objeto
console.log(MeuObjeto.__proto__ === Function.prototype) // A função tbm tem um __proto__ e aponta para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

