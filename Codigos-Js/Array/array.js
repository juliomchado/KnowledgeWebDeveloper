// Array no javascript é um objeto, não existe um tipo de dados array, porém funciona normalmente
console.log(typeof Array, typeof new Array, typeof [])

// Array é dinâmico em js, não tem tamanho fixo e é uma estrutura hêterogênea, posso colocar vários tipos em um mesmo array, porém não é recomendável pela boa prática

let aprovados = new Array('Bia', 'Carlos', 'Ana')  // Forma não recomendada de criar array, porém pode ser usada
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Forma recomendada de criar array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Caso queira acessar um índice não existente ele não irá dar um erro, ele irá apenas retornar undefined

aprovados[3] = 'Paulo' // Forma válida de adicionar um novo elemento no array (obs: É mais apropriado para substituir elementos dentro do array)
aprovados.push('Abia') // Outra forma de adicionar um novo elemento na última posição é esse
console.log(aprovados.length) // .length = Quantidade de elementos

aprovados[9] = 'Rafael' // Você pode criar elementos entre espaços não existentes, esse ex: eu tinha apenas até o elemento de índice 4, porém adicionei um elemento de índice 9, os elementos de 5 a 8 ficarão como undefined e o compilador irá aceitar
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)
console.log(aprovados)
aprovados.sort() // método .sort() irá ordenar o array, essa linha causou alteração no array, mas alguns métodos podem não causar alteração no próprio array, mas sim cria outro array
console.log(aprovados)

delete aprovados[1] // Deletar um elemento, da mesma forma que exclui um atributo de um objeto (obs: ele não irá reorganizar o array, o índice 1 continuará sendo ele, porém undefined)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice() // .splice() pode servir para adicionar o elemento em um determinado índice, também serve para remover um elemento do índice e também para remover e adicionar ao mesmo tempo ( o 1 elemento é o índice que quero trabalhar, e o 2 é quantos elemento que quer excluir apartir do elemento posto no 1, e o 3 é para adicionar elementos)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Nesse caso ele irá excluir 2 elementos apartir do índice 1 irá adicionar 'Elemento1' e 'Elemento2' nesses lugares 
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Caso coloco 0 no 2 indice dos (), ele irá adicionar os 2 elemmentos no índice posto primeiramente 
console.log(aprovados)



