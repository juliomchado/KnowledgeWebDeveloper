// ES8 2017: Object.values/Object.entries 
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // Me retorna apenas os valores do objeto
console.log(Object.keys(obj)) // Método antigo mas retorna as chaves do objeto

console.log(Object.entries(obj)) // Me retorna uma matriz com a chave e valores do objeto

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = { // Posso criar assim que o objeto pessoa recebe o nome e o valor que nesse caso é 'Carla' e não precisando passar nome: nome no objeto que nem antes
    nome,
    ola(){      // Não preciso cria que nem antes, posso criar função direto, antes seria ola: function() {}
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class 
class Animal {}
class Cachorro extends Animal {  // Cachorro herda de animal
    falar() {                    // Criar objeto em classe se usa new
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())


