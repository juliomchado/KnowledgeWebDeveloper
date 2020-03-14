// set é uma estrutura não indexada e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians') // Posso encadear assim
times.add('Flamengo')
times.add('Vasco') // Não aceita repetição, ele será ignorado

console.log(times)
console.log(times.size) // Saber o tamanho
console.log(times.has('vasco'))
console.log(times.has('Vasco')) // Verifica se o elemento está ou não incluido dentro do set
times.delete('Flamengo') // Deleta o elemento
console.log(times.has('Flamengo'))

// Outra forma de criar um set apartir de uma matriz
// Pode-se criar com um array normal
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

