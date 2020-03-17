let valor //Não inicializada
console.log(valor) //Essa variável não foi inicializada, então é undefined
//console.log(valor2) //Vai dar um erro de referencia (valor2 is not defined) é diference de undefined, pois significa que nem decladaro ele foi, diferente de undefined que é onde ele foi declarado mas não inicializado

valor = null //null = ausencia de valor, pois não tem valor e nem tem endereço que aponta pra um lugar da memória que tenha valor, porém foi inicializada
console.log(valor)

//Obs: Não recomendado atribuir undefined, caso queira "zerar" uma variável, use null

//console.log(valor.toString())//Não pode ler propriedade .toString nem nenhuma depois de . de valor null, vai dar TypeError

const produto = {}//Produto definido, porém o preço não está definido
console.log(produto.preco)//Irá retornar indefinido
//console.log(produto.preco.a)//TypeError onde não tem propriedade a de algo indefinido
console.log(produto)//Objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco)//!! = converte pra boolean
console.log(produto)//Existe o atributo preco, porém o atributo está undefined

//delete produto.preco //Usar isso caso queira tirar um atributo e não usar undefined
console.log(produto)

produto.preco = null //Sem preco
console.log(!!produto.preco)
