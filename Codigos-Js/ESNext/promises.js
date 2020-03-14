// promises = promessa, ou seja, a promessa foi cumprida, ou não foi cumprida, ou seja, acessando um arquivo remoto, ou ele vai ser cumprido ou vai ser rejeitado
// Usado para operações assincronas, ou seja, que pode demorar para ser respondido
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {   // resolve = uma função será chamada quando a promessa for atendida, reject = quando não for atendida
        setTimeout(() => {
            resolve(frase) // Aceita apenas um parâmetro, se usar mais de um será indefinida
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // then = função chamada quando resolve a promessa passando o objeto que você deseja que seja passado
    .then(outraFrase => console.log(outraFrase)) // Posso chamar .then quantas vezes você quiser
    .catch(e => console.log(e)) // catch = função chamado quando não resolve, chama-se apenas uma vez




