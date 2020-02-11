const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() //Chama a função dentro do objeto

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO
 
const falarDePessoa = pessoa.falar.bind(pessoa) // bind = Diz qual objeto que sempre o this será resolvido
falarDePessoa() 


