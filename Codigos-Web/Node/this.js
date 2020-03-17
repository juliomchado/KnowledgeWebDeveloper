console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // Estaria colocando isso pra um escopo global
}

this.perigo = '...' // Está colocando apenas em module.exports


logThis()






