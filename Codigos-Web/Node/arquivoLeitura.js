const fs = require('fs') // fs = File system (Arquivo já presente no node) para leitura de arquivos

const caminho = __dirname + '/arquivo.json'

// sincrono... (Cuidado, pois se for arquivo grande irá travar no event looping, pois ele tem que ler tudo primeiro para depois da a resposta)
// Não é muito recomendado se for arquivo grande
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Especificamente para o formato JSON pode se fazer assim:
const config = require('./arquivo.json')
console.log(config.db)

// Leitura de uma pasta: 
fs.readdir(__dirname, (err, arquivos) => {  // __dirname = diretório atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

