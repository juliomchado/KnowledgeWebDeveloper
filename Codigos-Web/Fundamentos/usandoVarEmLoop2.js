const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){ //Adicionando função no array da constante funcs a cada iteração
            console.log(i)
    })
}

//Ele ira retornar 10 em todas situacoes, pois 'var' não tem escopo de bloco e eale irá respeitar a regra do valor que fez ele sair do loop
//Pois termina no 9 e o 10 faz ele sair do loop, sem executar a linha funcs.push...

funcs[2]() 
funcs[8]()
