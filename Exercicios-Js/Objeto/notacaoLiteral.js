const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } 
const obj2 = {a, b, c} // Atualmente você pode colocar os atributos assim, sem precisar repeti-lo
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87


const obj3 = {}

obj3[nomeAttr] = valorAttr // Criando atributo na versão antiga
console.log(obj3)


const obj4 = {[nomeAttr]: valorAttr} // Na versão nova pode-se criar assim
console.log(obj4)

const obj5 = {  // Como definir funções na versão antiga:
    funcao1: function(){
        // ...
    }, 
    funcao2(){  // Na versão nova pode-se criar assim

    } 
}

console.log(obj5)
