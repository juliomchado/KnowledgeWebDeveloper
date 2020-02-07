const sequencia = {
    _valor: 1,   // convenção
   
    get valor() { return this._valor++ }, // Get = ler o método // Vou pegar o valor e acrescentar o valor para o valor seguinte 
    

    set valor(valor) {  // Set = você pode aplicar algum tipo de validação quando achar necessário
        if (valor > this._valor){
            this._valor = valor
        }
        // Atribui o valor de (valor) para this._valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Quando eu atribuo um valor, ele chama o método set
console.log(sequencia.valor, sequencia.valor) // Nesse caso ele ignora o 900, pois é menor que o antigo valor, essa comparação é feita na função do set

sequencia.valor = 1005
console.log(sequencia.valor, sequencia.valor, sequencia.valor)