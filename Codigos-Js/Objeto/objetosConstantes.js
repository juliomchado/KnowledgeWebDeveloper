// Pessoa aponta para endereço da memória e o endereço aponta para o objeto que existe dentro do endereço {...}
// pessoa -> 123 -> {...}
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