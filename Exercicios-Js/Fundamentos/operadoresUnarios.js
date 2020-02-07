let num1 = 1
let num2 = 2

num1++ //Postfix (pós fixada)
console.log(num1)
--num1 //Prefix (pré fixada)
console.log(num1)

console.log(++num1 === num2--)//Retorna verdadeiro, pois só é decrementado depois da verificação
console.log(++num1 === --num1)//Retorna falso, pois decrementa e depois faz a verificação


