const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//break pula estrutura de repeticao e vai para fora dela
for (x in nums) {
    if (x == 5){
        break
    }
        

    console.log(`${x} = ${nums[x]}`)
}

console.log("=======================")
//continue pula a condicao achada e vai pra outra
for(y in nums){
    if(y == 5){
     continue
    }
    console.log(`${y} = ${nums[y]}`)
}


console.log("=======================")

externo: //Rotulo
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3){
        break externo //Assim ele age no primeiro for também
        }
        console.log(`Par = ${a},${b}`)
    }
}
console.log('Fim!')
