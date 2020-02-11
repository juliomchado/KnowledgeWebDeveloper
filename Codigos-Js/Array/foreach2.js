// Simulando o forEach
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){ // Acesso o array dentro de uma função pertecente ao prototype por this
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) 