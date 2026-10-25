// Primitive DATA Types
// 7 Types : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 745612387994562132n


// Reference (Non Primitive) DATA Types
// Array, Objects, Functions

// Array
const heros = ["naagraj", "doga"];

// Objects
let myObj = {
    name: "Khairul",
    age: 22,
}

// Function
const myFunction = function() {
    console.log("hello");
}

console.log(typeof bigNumber); 

// ********* MEMORY ***********
// STACK (Primitive), HEAP (Non-Primitive)

let myName = "khairul"

let anotherName = myName
anotherName = "Alex"

console.log(myName); // Khairul
console.log(anotherName); // Alex

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user1@gmail.com"

console.log(userOne.email); //user1@gmail.com
console.log(userTwo.email); //user1@gmail.com


/*
NOTE: 
01. STACK: Stores primitive values and local variables; assignment generally copies the value.
02. Heap: Stores dynamically allocated objects; variables often hold a reference (or pointer) to the object.
*/










