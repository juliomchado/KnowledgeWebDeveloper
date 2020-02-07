// Essa função aponta pro global
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(this)
comparaComThis(global)

const obj = {} 
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log("======================================")

// Essa função não aponta pro global (É uma função Arrow), aponta pro arquivo exato
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

// Arrow function 'ganha' do bind, ou seja, o bind não consegue trocar a referência do this
console.log("======================================")
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)