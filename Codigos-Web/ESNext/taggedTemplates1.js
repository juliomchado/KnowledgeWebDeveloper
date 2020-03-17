// tagged templates - processa o template string dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`) // Usando a tag antes da template string significa que irá passar aluno e situacao para os atributos de tag transformando-a em array
                                             // Sendo assim partes = está e valores = aluno e situação, ou seja, tudo que está em ${}

console.log(`${aluno} está ${situacao}.`) // Sem a função antes irá retornar normalmente

