// operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função


// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario} // ...funcionario = pegando todos os atributos de funcionario e espalhando dentro de clone
console.log(clone)

// Obs: As alterações feita em clone não mudam em funcionarios

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA, 'Rafaela'] // Espalhando os atributos de grupoA no grupoFinal
console.log(grupoFinal)

// Operador rest
function total(...numeros) { //... = parâmetros variádos e são agrupados em uma estrutura de array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))  