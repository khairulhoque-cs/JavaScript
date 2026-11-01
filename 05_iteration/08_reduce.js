// reduce

const array = [1, 2, 3, 4, 5]

const initValue = 0;

const sum = array.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc + currVal
}, initValue )

console.log(sum);
