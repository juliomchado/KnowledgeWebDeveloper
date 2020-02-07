function Carro(velocidadeMaxima = 200, delta = 5){
    
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = () => {
        if(velocidadeAtual <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(`Velocidade atual do uno: ${uno.getVelocidadeAtual()} km/h`)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(`Velocidade atual da ferrari: ${ferrari.getVelocidadeAtual()} km/h`)

console.log(typeof Carro)
console.log(typeof ferrari)