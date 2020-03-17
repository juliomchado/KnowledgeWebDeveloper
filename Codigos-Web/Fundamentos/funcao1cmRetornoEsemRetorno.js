//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//Pode passar 1 valor, porem irá retornar NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8)//Funciona, porém ele só irar pega os 2 primeiros
imprimirSoma()//Irá funcionar, porém retorna NaN


//Funcao com retorno
function soma(a, b = 1) {
    return a + b //Não imprime apenas retorna
}

console.log(soma(2,3)) //Para imprimir o valor que retorno na funcão
console.log(soma(2)) //Usou o 'b = 1' como padrão, pois não foi passado o valor de 'b' na chamada
console.log(soma())
