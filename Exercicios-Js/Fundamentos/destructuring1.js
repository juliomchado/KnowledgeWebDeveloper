// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}


const { nome, idade } = pessoa //"Seria algo do tipo: Tire nome e idade do objeto pessoa"
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //"Tire o atributo nome e idade e crie variaveis com letra n e i com essas informações"
console.log(n, i)

const { sobrenome, bemHumarada  = true} = pessoa //"Tire sobrenome e bemHumarada do objeto pessoa, se bemHumorada não tiver nada retorne true"
console.log(sobrenome, bemHumarada)

const { endereco: {logradouro, numero, cep }} = pessoa //Retirar as informações do objeto endereco
console.log(logradouro, numero, cep)


//const {conta: {ag, num}} = pessoa //Vai dar problema pois o objeto não existe, ou seja é nulo ou indefinido, só não da problema e retorna undefined se o caminho até o dado está de fato setado.
//console.log(ag, num) 