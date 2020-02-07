const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)//Math.Pi = valor de Pi, Math.pow = Exponenciação sendo (x, y) x = valor que você quer utilizar e y = quantidade de vezes que irá multiplicar

console.log(area)
console.log(typeof Math)//Math é tipo objeto


console.log()
console.log(Math.ceil(6.1)) //Math.ceil = Arredonda pra cima
console.log(Math.floor(6.9)) //Math.floor = Arredonda pra baixo


const valor = Math.random() * (1000 - 0) + 0 //Math.random() = Criar valor random
//Algo do tipo : //const valor = Math.random() * (valorMax - valorMin) + valorMin
console.log(valor.toFixed(0))
