const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}


function exec(){
    const valor = 'Local'
    minhaFuncao()
}

// Ele irá mostrar Global, pois a função minhaFuncao procura no seu escopo e como não acha procura no de cima 
exec()
