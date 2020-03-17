const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]


// Imperativo = forma que você ensina para alguém exatamente os passos que tem ser executado sem deixar nenhum detalhe faltando, e não focando em oque tem que ser feito e sim como tem que ser feito (Esse código ele faz tudo ao mesmo tempo, ou seja, tem menos reuzo)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativa = Você apenas diz oque tem que ser feito e internamente elas são feitas, focando em oque tem que ser feito (Melhor, pois você pode reutilizar o código e cada passo faz uma coisa)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

// select codigo, nome from clientes where ativo = 1 (Código sql é declarativo)



