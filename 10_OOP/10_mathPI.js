// can we change PI value in JavaScript
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


console.log(Math.PI); // 3.141592653589793
Math.PI = 5
console.log(Math.PI); // 3.141592653589793

// user defined Object and How to change Object Property.
const users = {
    name: "Alex",
    age: 25,
    email: "alex@gmail.com"
}

console.log(Object.getOwnPropertyDescriptor(users, "name"));

Object.defineProperty(users, 'name', {
    writable: false,
    enumerable: false, 
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(users, "name"));

// If enumerable: false, then we not apply for loop
for (let [key, value] of Object.entries(users)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
