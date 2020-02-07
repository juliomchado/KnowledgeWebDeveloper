console.log('01)', '1' == 1) //Pergunta se '1' é igual 1, se for retorna true(Obs: está verificando valor e não está preocupado com o tipo)
console.log('02)', '2' === 1)//Estritamente igual? Pergunta se o valor e o tipo do '1' é igual a 1, se for tudo igual escreve true. 
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)//Estritamente diferente? Pergunta se valor e tipo é diferente, se for diferente algo, retorna true

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)//'0' = 1 de janeiro de 1970 (marco 0)
const d2 = new Date(0)
console.log('09)', d1 === d2) //Não faz diferença perguntar se é igual ou estritamente igual, pois ele está verificando endereço de memória e não valor
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //getTime valor em millisegundos desde a data de referencia até o horario atual(Os 2 são Numbers, tem o mesmo tipo e mesmo valor, então retorna true)

console.log('12)', undefined == null) //Undefined e null dão que são iguais, porém
console.log('13)', undefined === null)//Undefined e null não são estritamente iguais

//Recomendado usar estritamente igual na maioria dos casos para não confudir tipo e valores.