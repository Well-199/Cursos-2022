

const fruits = ["Apples", "Bananas", "Grapes", "Oranges"]

const groceriesList = fruits.reduce((accumulator, currentFruit, index) => {
    return accumulator + `${index+1} - ${currentFruit} \n`
}, "")

console.log(groceriesList)


