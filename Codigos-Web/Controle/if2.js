//Cuidados 

function teste1(num){
    if(num > 7) 
        console.log(num)        //Apenas esse ta associado ao if

    console.log('Final')
}

teste1(6)
teste1(8)


//NÃO USE ; COM AS ESTRUTURAS DE CONTROLE
function teste2(num){
    if(num > 7);{           //O console.log(num) não está associado ao if, pois o if termina em 
        console.log(num)
    }
}

teste2(6)
teste2(8)

