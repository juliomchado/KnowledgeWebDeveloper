console.log(7 / 0.0001)
console.log(7 / 0) //Retorna infinity.
console.log("10"/2) // Aceita valores em string e divide.
console.log('3' + 2)//Irá concaternar e não somar.
console.log('3' - 2)//Irá subtrair.
console.log("10,2"/2) //Só ira reconhecer se for com . e não reconhece com ,
console.log("Show!" * 2) //Não funciona pra repetir.
console.log(0.1 + 0.7) //Ira retornar 0.799999... etc e não 0.8 por causa das especificações do js que é mais rápida mas não 100% precisa.
//console.log(10.toString()) //Não permite
console.log((10.345).toFixed(2)) 
