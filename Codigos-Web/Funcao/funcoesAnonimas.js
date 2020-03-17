const soma = function (x, y) {
    return x + y
}

const inmprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}


inmprimirResultado(3, 4)
inmprimirResultado(3, 4, soma)
inmprimirResultado(3, 4, function (x, y) {
    return x - y
})
inmprimirResultado(3, 4, (x, y) => x * y)


const pessoa = {
    falar: function(){  // Também é aceita apenas falar(){}
        console.log('Opa')
    }
}

pessoa.falar()

