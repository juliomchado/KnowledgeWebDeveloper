//Operador com 3 operandos

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // '?' se for verdadeiro retorna tal coisa(Nesse caso 'Aprovado'), ':' se for falso retorna tal coisa(nesse caso 'Reprovado')
//Pode ser assim também: 

/*
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/

console.log(resultado(7.1))
console.log(resultado(6.7))

//const status = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //Pode retornar em constante tanto em função
