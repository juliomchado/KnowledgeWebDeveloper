// Função Factory = função que retorna um objeto


// Inves de criar os objetos manualmente, você pode cria-los por uma função
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}


// Factory simples

function criarPessoa(){
   return {
       nome: 'Ana', 
       sobrenome: 'Silva',

   } 
}

criarPessoa()

console.log(criarPessoa())

