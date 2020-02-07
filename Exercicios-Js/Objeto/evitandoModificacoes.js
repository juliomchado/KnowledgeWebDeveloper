// Object.preventExtensions() = Não deixa que o objeto seja estendido, ou seja, não deixa adicionar novos objetos ou atributos, porém pode remover
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) // Object.isExtensible() = testa se o objeto passado é extensivel ou não, ou seja, se pode extende-lo ou não
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal() = Você sela um objeto, ou seja, não consegue adicionar novos atributos, não consegue excluir atributos, porém posso modificar os valores dos atributos do objeto   
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Object.isSealed() =Testa se o objeto é selado ou não 

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes, ou seja, não consigo incluir novos valores, não consigo excluir valores e não consegue modifica-lo
const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro' // Não mudo a referência da constante (endereço da memória), continua apontando pro mesmo endereço, porém o objeto dentro do endereço pode ser alterado
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} // Nesse caso, você está fazendo com que 'pessoa' aponte para outro endereço e aponte para outro endereço, porém, como constante, você não poderá mudar o endereço


Object.freeze(pessoa) // freeze = 'congelando' o objeto pessoa, fazendo assim com que você não consiga mexer no objeto, e assim tornadno o objeto constante e não a referenciação constante (endereço de memória)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome


// Aqui o nome continua sendo Pedro, ele ignora sua tentativa de mudar o objeto depois de congelado
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'}) // Cria assim um objeto constante diretamente
console.log(pessoaConstante)

