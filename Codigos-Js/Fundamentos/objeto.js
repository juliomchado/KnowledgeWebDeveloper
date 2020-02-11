//Em js objeto é uma colecao de chave - valor, onde você da um nome(identificador) e passa um valor para ele, pode ser de qualquer tipo, int, float, função, etc.
//Pode conter objeto dentro de outro objeto ex: obj produto com obj categorias estando dentro de produto.


const prod1 = {} //Par de {} = representa um objeto
prod1.nome = 'Celular Ultra Mega' //nome foi criado dinamicamente dentro do objeto.
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Posso passar o nome com espaços e usar essa notação, porém, é recomendado evitar atributos com espaços.

console.log(prod1)

const prod2 = { //Também é possivel criar chave - valor na própria declaração do objeto.
    nome: 'Camisa Polo',
    preco: 79.90
}
//prod2['Desconto Legal'] = 0.40 // Também posso adicionar por fora assim, não tem problema
console.log(prod2)

//ISSO NÃO É JSON!!!
const prod3 = { //Exemplo de objeto dentro do objeto 
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{ 
            babla: 2
        }
    }
}
console.log(prod3)

//ISSO É UM JSON!!!
'{ "nome": "Camisa Polo", "preco": 79.90}' //Os atributos do json são delimitados por aspas duplas (JSON é texto, Objeto é codigo, tendo atributos, comportamentos, etc )


