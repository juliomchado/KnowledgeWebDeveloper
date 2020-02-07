// OBS: O this vira constante e não muda nunca, fica no contexto que a função foi escrita e não é influênciado o valor por ser chamados de locais diferentes

let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {   // Isso é função Arrow, e ela sempre é anônima, para poder chama-la novamente tem que guardar ela em uma variável ou constante
    return 2 * a
}

dobro = a => 2 * a  // Caso tenha apenas um parâmetro pode usa-la sem parênteses e pode usar o fato de quanto tira as {} você tem um retorno implícito(return), usada norlmamente qunado tem funções de apenas uma linha
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Caso a função não tenha parametros pode se usar esse _ , porém o _ é considerado um parametro, porém você pode ignorá-lo
console.log(ola())
 