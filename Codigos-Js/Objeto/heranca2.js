// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // Não é recomendado fazer isso

const avo = {attr1: 'A'} // o avo tem como prototipo o object.prototype
const pai = {__proto__ : avo, attr2: 'B'} // __proto__: avo = herdando do avo
const filho = {__proto__: pai, attr3: 'C'} //__proto__: pai = herdando do pai

console.log(filho.attrA)
console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3) // Caso tenha um atributo do mesmo nos outros objetos, ele será ignorado  ex: attr3: '8' em pai, não será achado


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing = sombreamento (irá ignorar o velMax de carro, pois ele será encontrado primeiro e irá sombrear as outras)
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super = fazer com que ele chame o método do meu protótipo e não dos outros
    }

}

Object.setPrototypeOf(ferrari, carro) // Outra forma de fazer herança, onde 1 atributo é o objeto e o 2 é de quem herda (o prototipo), é o mesmo que __proto__: nome
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)


volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

