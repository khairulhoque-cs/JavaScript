//********* Array ******
// Array Declaration Syntax
const myArr = [0, 1, 2, 3, 4, 5]
console.log(typeof myArr); // object

console.log(myArr[3]);

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2]);


// Array Methods

//push, pop

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

// shift, unshift, includes, indexOf, join
myArr.unshift(10)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(13));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr);

const mynew1 = myArr.slice(1, 3);

console.log(mynew1);
console.log("B ", myArr);

const mynew2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(mynew2);

// push, concat

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// flat, isArray, from, of

const another_array = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 12, 13]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 12, 13]


console.log(Array.isArray("Khairul")); // false
console.log(Array.from("Khairul"));  // [ 'K', 'h', 'a', 'i', 'r', 'u', 'l' ]

// Important Point
console.log(Array.from({name: "Khairul"})); // []

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

/* 
NOTE: 
Array Methods: push, pop, shift, unshift, includes, 
               indexOf, join, Slice, Splice, concat, 
               flat, isArray, from, of, 
*/




























