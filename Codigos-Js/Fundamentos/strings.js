const escola = "Cod3r"

console.log(escola.charAt(4))//charAt = Dar o elemento no índice que foi pedido entre os ().
console.log(escola.charAt(5))//Retorna valor vazio, ou seja null.
console.log(escola.charCodeAt(3))//Retorna o valor da tabela Unicode ou Asp referente ao elemento do índice indicado.
console.log(escola.indexOf('3'))//Retorna o índice do elemento indicado entre ().

console.log(escola.substring(1))//Retorna os elementos do índice 1 até o final.
console.log(escola.substring(0, 3))//Retorna os elementos do índice 0 até o 2.

console.log('Escola '.concat(escola).concat("!"))//Concatena os valores dados ou escritos entre ().
console.log('Escola ' + escola + "!")//Faz o mesmo que concat
console.log(escola.replace(3, 'e'))//Substituir o elemento do índice 3 por 'e'.
console.log(escola.replace(/\d/, 'e'))//Substituir todos os digitos pela letra e.
console.log(escola.replace(/\w/g, 'e'))//Substituir todas as letras e digitos pela letra e.

console.log('Ana, Maria, Pedro'.split(','))//Irá gerar array com 3 elementos separados pela virgula.
console.log('Ana, Maria, Pedro'.split(/,/))//Irá fazer o mesmo.


