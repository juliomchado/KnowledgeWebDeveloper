// O resultado de uma função reduce é passado sempre para próxima 

// Reduce também recebe um callback e posso passar o elemento inicial na 2 chamada

// Internamente em um reduce se roda um for
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))
 
// Sem valor inicial
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) 
    return acumulador + atual // 1 passada usou o 7.3 como acumulador e 9.2 como atual, depois somou e rodou novamente, na 2 passada usou 16.5 como acumulador e 9.8 como atual depois somou 26.3 + 9.8, 3 passada usou 26 como acumulador e 8.7 como atual e somou, com resultado = 35
})

console.log(`Resultado = ${resultado}`)

// Com valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) 
    return acumulador + atual
}, 10)   // Ele usou como acumulador o valor dado como inicial, que nesse caso é 10

console.log(`Resultado = ${resultado2}`)

