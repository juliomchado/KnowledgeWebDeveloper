console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // Os são função, logo os 3 tem um atributo chamado .prototype

// Assim posso colocar novas funções ou atributos em propotype, por exemplo na String
String.prototype.reverse = function(){  // Inverter strings
    return this.split('').reverse().join('') // Separo todos os elementos em array = split(''), inverto todos esses elemntos = reverse, e juntos eles dnv na string = join('') 
                                            // Obs: Podemos acessar um array ou uma string dentro de um metodo prototipo por 'this.'
}

console.log('Eai gente'.reverse()) // Posso chamar a função depois de criada

Array.prototype.firts = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].firts())
console.log(['a, b, c'].firts())

String.prototype.toString = function () { // Posso sobreescrever comportamentos padrões, porém não é recomendado fazer isso, pois pode trazer efeitos colaterais
    return 'Lascou Tudo'
}

console.log('Eai Gente'.toString())
// console.log('Eai Gente'.reverse())

