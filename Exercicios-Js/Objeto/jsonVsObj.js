const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // Converte o objeto em json, obs: nesse caso ele ignora função, pois json é um formato de dados, apenas passa dados

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) 
// console.log(JSON.parse("{'a':1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string 
console.log(JSON.parse('{ "a":1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
// console.log(JSON.parse('{ "a":1, "b": \'string\', "c": true, "d": {}, "e": [] }')) 
// \'string\` = a barra é para dizer que como eu comecei a string com ', o ' de 'string' não é o fechamento dela, e sim de outra coisa, ficando assim: \'string\' 



const objeto = {
    a: 1,
    b: 2
}

const Json = {
    "a": 1,
    "b": 2

}











