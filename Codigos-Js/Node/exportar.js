console.log(module.exports === this)
console.log(module.exports === exports)

// Os três fazem o mesmo, porém é usada somente se for o primeiro objeto
this.a = 1  
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

// Caso queira criar um novo objeto para ser exportado, a forma correta é ser feita assim

module.exports = {
    publico: true
}