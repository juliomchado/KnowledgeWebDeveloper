const valores = [7.7, 8.9, 6.3, 9.2] //Array em Js é flexivel, não tendo tamanho nem tipo fixo.
console.log(valores[0], valores[3])
console.log(valores[4]) //Não da erro, ele apenas mostra que não ta definido

valores[10] = 10 //Ele mostrara que tem 6 itens vazios entre o índice 3 e 10
console.log(valores)


valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')//.push = Adicionar novos elementos no array. Obs: Js aceita multiplos tipos no array.
console.log(valores)

console.log(valores.pop()) //Ele retira o ultimo valor do array e retorna ele
delete valores[0] // delete = Deleta o elememento indicado em []
console.log(valores)

console.log(typeof valores)


