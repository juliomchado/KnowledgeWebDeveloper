var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) //Não importa o 'escopo', se for fora da função ele irá considerar o ultimo redefinido
//Obs: Só existe escopo de 'var' dentro da função ou global, não existe de bloco
