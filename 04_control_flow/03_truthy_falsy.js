const userEmail = "Alex@gmail.com"

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*
NOTE:
01. falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

02. truthy values
"0", 'false', " ", [], {}, function(){},

03. false == 0 -> true
04. false == '' -> true
05. 0 == '' -> true
*/

// How to check empty array
if(userEmail.length === 0) {
    console.log("Array is empty");
}

// How to check empty Object
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10   // Output: 5
val1 = null ?? 10 // Output: 10
val1 = undefined ?? 10 // Output: 10
val1 = null ?? 2 ?? 3 ?? // Output: 2

console.log(val1); 

// Terniary Operator -> condition ? true : false

const iceTeaPrice = 110

iceTeaPrice >= 50 ? console.log("greater than 50") : console.log("less than 50");







