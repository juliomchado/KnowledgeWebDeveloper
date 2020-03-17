console.log(typeof Object)//Função
console.log(typeof new Object)//Objeto 

//Obs: console.log(new Object()) // É um Construtor

const Cliente = function(){}
console.log(typeof Cliente)//Função
console.log(typeof new Cliente)//Objeto

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto) //Função //class = atalho de sintaxe, pois por baixo também é uma função
console.log(typeof new Produto)//Objeto