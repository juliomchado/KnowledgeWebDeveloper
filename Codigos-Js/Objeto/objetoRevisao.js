
// Objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object // new = Instancia um objeto

// Pode ser acessada e criada dessas formas: 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// Pode ser deletada dessas formas: 
delete produto.preco
delete produto['marca do produto']


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

// Acessando os atributos: 
carro.proprietario.endereco.numero = 1000
// ou 
carro['proprietario']['endereco']['lagradouro'] = 'Av Gigante'
console.log(carro)

// Deletando os atributos: 
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
// console.log(carro.condutores.length)



