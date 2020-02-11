function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //Se usar apenas | verifica bit a bit
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)  //bitwise xor (Ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2 //Também simula ou exclusivo
    const manterSaudavel = !comprarSorvete //Operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Só aceita um retorno, então colocar tudo em um objeto possibilita retornar todas as constantes
    //Se omitir a chave, você colocando direto o valor, ele ja cria a chave automaticamente, não precisando repetir por ex: comprarSorvete: comprarSorvete

}
console.log("Se os dois trabalhos der certo: ")
console.log(compras(true, true))
console.log("Se apenas  1 trabalho der certo(no caso o 1 deu certo): ")
console.log(compras(true, false))
console.log("Se apenas  1 dos trabalhos der certo(no caso o 2 deu certo): ")
console.log(compras(false, true))
console.log("Se os dois trabalhos der errado: ")
console.log(compras(false, false))




