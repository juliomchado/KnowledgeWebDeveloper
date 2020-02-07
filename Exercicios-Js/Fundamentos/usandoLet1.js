var numero = 1
{
    let numero = 2 //let tem escopo de bloco, função e global    
    console.log('dentro =', numero)
}
console.log('fora = ', numero) //Mesmo tendo o mesmo nome, são variaveis diferentes por causa do escopo