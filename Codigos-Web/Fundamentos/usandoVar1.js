{
    {
        {
            {
                var sera = 'Sera?????'
            }
        }
    }
}


console.log(sera) //'var sera' esta visível fora do escopo de onde foi iniciada]

function teste(){
    var local = 123
}

teste()
console.log(local) //Se o 'var' for criado dentro de uma função, não será visivel fora do escopo da função
