let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //Aceita tanto true, false tanto 0 ou 1 pra verdadeiro e falso
console.log(!!isAtivo)

isAtivo = 0
console.log(!!isAtivo) //!! = verifica se é verdadeiro ou falso, convertendo pra boolean

console.log();
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log();
console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log()
console.log("pra finalizar...")
console.log(!!('' || null || 0 || '')) //Ira verificar se tem verdadeiro e ira retornar, se não retornarar falso
console.log(('' || null || 0 || 'Ola'))//Ira retornar o primeiro verdadeiro que foi achado
let nome = ''
console.log(nome || 'Desconhecido')//Irá retornar o primeiro verdadeiro que achar.

