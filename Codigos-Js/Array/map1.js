// Map serve para mapear de um array pro outro, e o resultado será com array do mesmo tamanho do passado
// Map não modifica o array atual, ele apenas gera outro com o resultado pedido
const nums = [1, 2, 3, 4, 5]

// Map = Um For com propósito
let resultado = nums.map(function(e) { // O map recebe um callback (1- O próprio valor atual, 2- O índice, 3-Array completo)
    return e * 2        // Obrigatório ter retorno, se não irá retornar undefined 
})  

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)  // Você pode chamar vários maps de uma vez
console.log(resultado)


