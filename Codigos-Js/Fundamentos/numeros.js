const peso1 = 1.0 //Se for número quebrado ia dar falso no Number.isInteger, ou seja, não iria considerar número inteiro.
const peso2 = Number('2.0') //Aceita número em string convertido da string.

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Number.isInteger = verificar se o valor dado é inteiro, () = variável ou constante que você quer veríficar.
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed = controlar casas decimais, () = quantidade de casa que você quer.
console.log(media.toString()) //toString = Converter valor numérico em string.
console.log(media.toString(2)) //() = Converter em valor binário. 
console.log(typeof media)
console.log(typeof Number)
