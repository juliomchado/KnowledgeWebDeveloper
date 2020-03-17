const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // Resumo: Escrever e salve um novo arquivo com diretorio atual e com nome arquivoGerado.json e transforma-lo em JSON, e caso tenha um erro mostre, se não mostre Arquivo Salvo
    console.log(err || 'Arquivo salvo!')
})


