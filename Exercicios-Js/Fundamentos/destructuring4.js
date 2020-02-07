
//Usando destructuring em forma de array = usar [] inves de {}
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //Fazer troca se o maximo for menor que o minimo no array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))//Irá atribuir ao 'min'
console.log(rand([, 10])) //Irá atribuir apenas o 'max' e o 'min' sera = 0
console.log(rand([]))
//console.log(rand())//Irá quebrar, pois estara tentando desestruturar algo null ou undefined.
