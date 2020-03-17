// console.log(global)
// Ter cuidado com usar o global, pois é fácil de dar problemas
// Ele pode ser mudado em qualquer lugar e para contornar isso é bom usar o freezy

// Como criar objetos globais: 
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})





