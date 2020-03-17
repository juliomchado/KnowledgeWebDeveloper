const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // Esse array não tem os valores fixos, eu apenas não posso atribuir mais nada a constante pilotos, porém posso alterar o conteúdo do array
console.log(pilotos)

pilotos.pop() // Esse método remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Esse método adiciona um novo elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um novo elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Significa que antes do índice 2, adiciona o 'Bottas' e o 'Massa' no índice 0 e índice 1 respectivamente
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Significa que vou remover apenas um elemento no índice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // .slice = Retorna um novo array pegando um pedaço dele ou recortando, e nesse caso ele pega apartir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // .slice(O item que você quer pegar *O índice escrito é considerado*, Até qual índice você quer pegar *O índice que você passou até qual vai pegar é considerado -1 *)
console.log(algunsPilotos2)


