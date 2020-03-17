// Arrow Function
const soma = (a, b) => a + b // Função arrow é sempre uma função anônima, por isso você deve atribui-la a uma variável ou constante
console.log(soma(2, 3))

const soma2 = (a, b) => { // Pode ser criada das 2 formas
    return a + b
}
console.log(soma2(3, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)  // Em uma Arrow function o this aponta para exports, ja em uma função normal, o this exporta para global, ou seja, todos os arquivos vão ter acesso e não apenas o módulo
const lexico2 = lexico1.bind({}) // Posso usar o .bind({}) e passar para qual objeto uma função vai exportar e assim não aponta mais pra global, só funciona caso for uma função normal 

lexico1()
lexico2()

// Parametro default
function log (texto = 'Node') { // Valor padrão nesse caso é o 'Node'
    console.log(texto)
}

log() // Caso eu não passe nenhum parâmetro ou undefined ele irá usar o valor padrão passado
log(null)  // Caso eu passe nulo ele irá entender que eu quero um valor nulo e não irá passar o padrão
log('Sou mais forte') // Caso eu passe um parâmetro ele assume o parametrô e não o valor padrão



