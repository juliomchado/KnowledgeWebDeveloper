//Extrair o valor que está dentro da posição do vetor dentro das variaveis postas em const [nomeVariavel]
//depois do = (Lado direito)  está atribuindo o valor
//antes do = (Lado esquerdo) está usando o operador destructuring e extraindo o valor do array
const [a] = [10] //Atribuiu o 10 ao 1 elemento (o elemento 'a' do array)
console.log(a) 

const[n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //, , = irá ignorar o índice
console.log(n1, n3, n5, n6)

const[, [, nota]] = [[, 8, 8], [9, 6, 8]] //destructuring no Array multidimensional
console.log(nota)

