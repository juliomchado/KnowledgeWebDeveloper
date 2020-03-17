const moduloA = require('../../moduloA') // Funciona no windows e no mac essa forma de acessar sem respeitar letras maiúsculas e minúsculas
console.log(moduloA.ola)



// node_modules pode ser chamado somente pelo nome da pasta e essa pasta deve conter um arquivo index.js
// Módulos core = modulos previamente instalados com o node

const c = require('./pastaC') // Não preciso usar /index.js caso seja uma pasta que exista ele
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//         res.write('Bom dia!')
//         res.end()
// }).listen(8080)







