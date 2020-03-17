// Para funcionar como comando de entrada deve escrever no terminal 'node nomedapasta.js escreveoquequer'
// Nesse exemplo: node entradaESaida.js -a 

const anonimo = process.argv.indexOf('-a') !== -1  // Pego a flag pelo terminal e se ela for diferente de -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n') // Escreva fala anonimo
    process.exit() // Finalizar processo
} else { // Para usar isso escreva no terminal: node entradaESaida.js
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // stdin = teclado, on data = quando aperta enter Obs: O enter também vai ser enviado junto
        const nome = data.toString().replace('\r\n', '') // Troca o enter por nada
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}





