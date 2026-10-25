//********* NUMBER *********
const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const num = 23.896
console.log(num.toPrecision(3)); // 23.9

const numOne = 100000
console.log(numOne.toLocaleString('en-IN')); // 1,00,000

//*********** MATHS **********

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(1, 2, 3, 8));
console.log(Math.random()); // Range: 0 to 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

















