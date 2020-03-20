// Obs: essa pasta não deveria tar nos exemplos de html, pois ela é uma pasta que não deveria aparecer no brownser, porém, so para teste ela está aqui
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// urlencoded = padrão que quando submete um formulário é o padrão que ele vem e por isso precisa fazer um parse, e nesse caso é de modo estendido
// Se não tiver o bodyParser ele irá vim como undefined, pois não transformou o padrão urlenconded em objeto

app.use(bodyParser.urlencoded({ extended: true }))


// OBS: Se o método for get, o resultado não vem pro servidor pelo body e vem pelo queryString, ou seja, teria que colocar algo como 'req.query' e não 'req.body'
app.post('/usuarios', (req, resp) => {
    // req = requisição, ou seja, oque recebe 
    // resp = resposta, ou seja, que você manda
    console.log(req.body)
    // resp.send = mandar como resposta 
    // obs: foi enviada em html, como html é um arquivo de texto, ele irá aceitar essa string
    resp.send('<h1>Parabéns. Usuário Incluido</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)

    resp.send('<h1>Parabéns. Usuário Alterado!!</h1>')
})

app.listen(3003)

// Obs: Você recebe como {nome: sla}, pois no input no html foi colocado a propriedade name=""

