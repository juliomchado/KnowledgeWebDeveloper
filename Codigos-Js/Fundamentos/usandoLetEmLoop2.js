const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){ //Adicionando função no array da constante funcs a cada iteração
            console.log(i)
    })
}

//Ele ira retornar o índice indicado entre [], pois 'let' tem escopo de bloco
//A função tem "consciencia" de onde foi definida
funcs[2]() 
funcs[6]()
funcs[8]() 