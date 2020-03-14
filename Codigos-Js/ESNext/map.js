// No caso do map a chave pode ser uma função, um numero, um objeto etc, e em um Objeto normal a chave é apenas uma string por exemplo


const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react')) // A forma de chamar um map pela chave e retornar o objeto é assim
console.log(tecnologias.get('react').framework) // Para retornar apenas o valor é assim


// Outra forma de criar um map ja atribuindo os elementos
const chavesVariadas = new Map([                 
    [function () { }, 'Função'],     // Passando uma função como chave e valor uma string
    [{}, 'Objeto'],
    [123, 'Número'],

])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // .has = função que diz se o elemento está ou não contido dentro deste map retornando true or false
chavesVariadas.delete(123)          // Posso excluir elementos de dentro de um map assim
console.log(chavesVariadas.has(123)) 
console.log(chavesVariadas.size) // Para saber quantos elementos estão presentes dentro do map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Não posso ter chaves duplicadas, ele irá substituir o ultimo pelo primeiro
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
