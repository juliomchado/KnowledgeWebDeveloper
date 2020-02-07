console.log('a =', a)//Mesmo sendo declarada na 2 linha, ela está undefined aqui, ou seja joga para cima o var 
 var a = 2  
 console.log('a =', a)

 console.log()

//Oque o código fez: 
let b
console.log('a =', b)
b = 2
console.log('a =', b)

console.log()

//Diferente do que se espera em outras linguagens ou no js com let:  
console.log('a =', c) //O código quebraria aqui, pois a variavel 'c' não existe
let c = 2
console.log('a =', c) //Aqui passaria a existir