let a = 3

global.b = 123 //global == window no browser
this.c = 456 //this === global
this.e = 'teste'

console.log(this.a) //Não acha, pois let não é global
console.log(global.a) 
console.log(global.b) 
console.log(this.c)
console.log(module.exports.c) // this === module.exports
console.log(module.exports === this) 
console.log(module.exports)

//module.exports = {e : 456, f: false, g: 'teste'}

//Criando variavel maluca: sem var e let! 
//Essa variável entra no espoco global
abc = 3 //Não faça isso

console.log(global.abc) 


//Dentro de node, cada arquivo é um módulo, na web (browser) muitas vezes os arquivos são um arquivos só

