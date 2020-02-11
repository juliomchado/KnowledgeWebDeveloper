// Forma de percorrer um array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x){ // o forEach recebe um callback, chamando cada elemento que foi percorrido e chama o callback retornando o próprio elemento e o índice dele obs: O índice é sempre passado como segundo parâmetro
    console.log(`${indice+1}) ${nome}`) 
}) 


aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


aprovados.forEach(function(nome, indice, array, x){
    console.log(array) // O Array é passado como 3 parâmetro e so existe 3 parâmetros pelo callback, os outros retornarão undefined
}) 



