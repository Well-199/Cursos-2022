const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reduceResult = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
}, 0)

console.log(reduceResult)





