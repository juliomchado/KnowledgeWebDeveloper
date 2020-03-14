// Enquanto o forIn intera em cima de índice, o forOf intera em cima de valores
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// Usando forIn
for (let i in assuntosEcma) {
    console.log(i) // Pode se perceber que ele retorna o índice, diferente do of que retorna o valor
}

// Usando forOf
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

// Usando Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// Como retornar chave e valor com Map
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// Método para retornar apenas chave
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// Método para retornar apenas valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// Método para retornar apenas as entradas (ou registros)
// Usa-se desestruturação
for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

// Fazendo isso em um Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}

