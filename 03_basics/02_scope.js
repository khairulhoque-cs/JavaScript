let a = 10 // Global scope
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

// scope -> {}
if(true) {
    let x = 10  // block scope
    const y = 20
    var z = 30
}

// console.log(x);  // ReferenceError: x is not defined
// console.log(y);     // ReferenceError: y is not defined
console.log(z);      // 30



// Nested Scope
function one() {
    const username = "Alex"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);  // ReferenceError: website is not defined

    // two() // Alex
}

one()

// NOTE

function addOne(num) {
    return num + 1
}

addOne(4)

// addTwo(5)   // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 1
}

addTwo(5)