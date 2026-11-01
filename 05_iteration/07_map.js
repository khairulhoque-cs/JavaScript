// map

const nums = [1, 2, 3, 4, 5, 6, 7]

const newNums = nums.map( (num) => {
    return num + 10
} )
console.log(newNums);

// Chaining
const number = nums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(number);

