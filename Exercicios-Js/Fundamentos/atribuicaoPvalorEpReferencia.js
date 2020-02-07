//Atribuicao por Referencia

const a = {name: 'Teste'} //A constante 'a' não tem o valor dado, e sim o endereço da informação passada na memória, esta apenas apontando.

console.log(a)

const b = a //'b' não esta recebendo 'a' e sim o mesmo endereço na memória, apontando 'b' para la
b.name = 'Opa' //Posso mudar a informação assim.

console.log(a)//A constante 'a' mudou junto com 'b', pois os dois armazena o endereço e igualei os endereços b = a, passando o endereço de 'a' pra 'b'.
//Se eu mudar a partir de 'a' o 'b' percebe a mudanca e se eu mudar 'b' o 'a' percebe a mudanca

/*===============================================================================================================================================================*/

//Atribuicao por valor

let c = 3 //Nesse caso o '3' é do tipo básico ou primitivo, que ja muda a lógica
let d = c //Nesse caso o valor de memória não foi igualado, pois foi uma cópia por valor e não por referencia

d++;

console.log(d)
console.log(c) //Valor de 'c' é diferende de 'd'


