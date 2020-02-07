const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Ele pega todas as chaves de um objeto
console.log(Object.values(pessoa)) // Ele pega todos os valores do objeto
console.log(Object.entries(pessoa)) // Ele te da um array com todos os arrays com 'sub arrays' que tem a chave e o valor

Object.entries(pessoa).forEach(e => {  // Percorro os elementos do array gerado por Object.entries 
    console.log(`${e[0]} : ${e[1]}`) // Imprimo os elementos de índice 0 e o elemento do índice 1 (chave e valor)
})


Object.entries(pessoa).forEach(([chave, valor]) => {  // Usando destructuring e pegando os elementos chave e valor de cada elemento (no caso elemento 1 e 2)
    console.log(`${chave} : ${valor}`) 
}) 
 
Object.defineProperty(pessoa, 'dataNascimento', { // Definir uma propriedade
    enumerable: false, // Se pode ser listada (object.keys)
    writable: false, // Pode ser alterada? 
    value: '01/01/2019'

}) 


pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // Não é alterada, pois definir que não pode ser alterada em denifeProperty
console.log(Object.keys(pessoa)) // Não mostrara, pois não posso tentar pegar suas chaves, pois ta definido em enumerable: false.

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Tudo que eu colocar de atributo será atribudo a ele, no caso a constante 'obj', e se o valor for repetido ele pegará o ultimo e irá sobreescreve-lo o antigo

Object.freeze(obj)
obj.c = 1234
console.log(obj)



Object.setPrototypeOf(objetofilho, objetopai) // O filho herda do pai





