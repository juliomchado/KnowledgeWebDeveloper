require('./global') // Depois de ter exportado ele, ele pode ser usado em qualquer lugar

console.log(MinhaApp.saudacao()) // Não sou obrigado usar o global ex: global.MinhaApp.saudacao()

MinhaApp.nome = 'Eita!' // Pode ser mudado em qualquer lugar
console.log(MinhaApp.nome)

// Uma alternativa é usar o freezy


