// Reconstruindo o template string

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`  // isNaN(valor) = perguntando se não é um valor numerico, se for, retorna `R$${valor.toFixed(2)}` tofixed(2) = 2 casas decimáis
        resultado.push(partes[indice], valor) // push = adiciona um ou mais elementos ao final de um array e retorna o novo
    })
    return resultado.join('') // .joins() une todos os elemento de um vetor numa string
}


const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)





