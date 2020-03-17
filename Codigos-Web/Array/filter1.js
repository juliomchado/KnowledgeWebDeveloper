// filter serve para filtrar um array
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },

]

console.log(produtos.filter(function(p){ // 1 = elemento, o 2 elemento = o index, e o 3 = o array, 4 = também posso passar o this que será usado, esse parametro é opcional
 return p.preco > 2400 // Ele verifica se e falso ou verdadeiro, se for verdadeiro ele passa se não ele não passa
}))  // Array final normalmente retorna menor ou igual o valor do array antigo, diferente do .map, pois se o elemento não existir ele será tirado no .filter

// Apenas produtos que são frágeis
const fragil = e => e.fragil

// Produtos que tem o preço acima de 500 reais
const caro = e => e.preco > 500

// Retornar produtos que é frágil e caro
console.log(produtos.filter(fragil).filter(caro))


