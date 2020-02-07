// Posso criar uma função factory passando os parametros para o objeto]
// Obs: Não precisa colocar o 'nome:', pode passar o parâmetro direto

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
