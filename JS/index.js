
function add(a, b){

    let sum = a + b
    
    sum = sum >= 10 ? sum : `${0}${sum}`
    
    return Number(sum)
}

console.log(add(2, 2))





