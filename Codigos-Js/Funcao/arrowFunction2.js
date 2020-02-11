// Aqui o resultado sera o que a gente espera, pois o this sempre irá apontar da pessoa, pois a Arrow function foi chamada dentro de pessoa

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++;
        console.log(this.idade)

    }, 1000)
}

new Pessoa