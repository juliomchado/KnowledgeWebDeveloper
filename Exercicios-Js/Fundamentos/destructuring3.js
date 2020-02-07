function rand({min = 0, max = 1000}){ //Passando objeto a uma função e inves de acessar objeto.min, objeto.max, usando o destructuring ja pego os atributos sem precisar usar a notação ponto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) //Dará problema pois irá tentar desestruturar algo que está undefined ou null
