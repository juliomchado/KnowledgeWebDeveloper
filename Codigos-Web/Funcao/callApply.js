function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto  = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco: 49990, desc: 0.20}


// A diferença é apenas a passagem dos parametros
console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // 1 parametros é o contexto, depois os outros parametros
console.log(getPreco.apply(global, [0.17, '$'])) // 1 parametro é o objeto usado de contexto e depois um array cm todos os outros parametros



