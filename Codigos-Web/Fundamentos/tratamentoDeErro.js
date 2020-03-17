

function tratarErroELanca(erro){  //Pode retornar coisa no erro:
    //throw new Error('...')    
    //throw 10
    //throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.messege,
        date: new Date
    }
}

// try, catch e finally é igual no c#

function imprimirNomeGritado(obj){
    try{ //Verifica se tem excessão
    console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){ //Se acontecer uma excessão ele irá cair aqui
        tratarErroELanca(e)
    }
    finally{ //Se der erro ou não ele executa oque ta dentro do finally
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)  //Gerou excessão