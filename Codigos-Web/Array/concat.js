// concat = contatena os arrays, porém não muda os arrays, apenas cria um novo com eles concatenados

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')  
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // Posso passar os parâmetros dessa forma, criando um array vazio e concatenando ou passando outros como parâmetro






