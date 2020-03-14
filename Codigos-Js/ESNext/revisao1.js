// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
 

// Template String 
const produto = 'iPad'
console.log(`${produto} 
é 
caro!`)

// Destructuring 
const [l, e, ...tras] = "Cod3r" // Desestruturando uma string | Cria variáveis para guardar as informações, nesse caso l = elemento 0 da string 

console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // Desestruturando um array | Coloca , para dividir e caso queira pular um elemento 
console.log(x, y)

const { idade: i , nome} = { nome: 'Ana', idade: 9} // Desestruturando um Objeto | Tira informações do objeto e guarda nas variáveis, posso renomear colocando  varantiga : varnova
console.log(i, nome)

