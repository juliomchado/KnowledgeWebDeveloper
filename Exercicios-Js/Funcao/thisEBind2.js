function Pessoa(){
    this.idade = 0


    const self = this // self sempre apontará para Pessoa(){}

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Dispara uma função a partir de um determinado intervalo passado como parametro, obs: O intervalo é passado em millisegundos
}

new Pessoa // Criando objeto