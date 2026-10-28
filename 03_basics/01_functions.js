//*** Functions *** 
console.log("k");
console.log("h");
console.log("a");
console.log("i");
console.log("r");
console.log("u");
console.log("l");

function sayMyName() {
    console.log("k");
    console.log("h");
    console.log("a");
    console.log("i");
    console.log("r");
    console.log("u");
    console.log("l");
}

sayMyName() // call function

// Function with parameters
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(3, 4); // 7
addTwoNumbers(3, "4"); // 34
addTwoNumbers(3, "a"); // 3a
addTwoNumbers(3, null); // 3

const result = addTwoNumbers(4, 7);
console.log(result); // undefined


function sumOfTwoNumbers(num1, num2) {

    let result1 = num1 + num2;
    return result1;
    console.log("khairul");
}

const total = sumOfTwoNumbers(3, 4);  
console.log(total);  // 7


function loginUserMessage(username) {
    if(username === undefined) {                // username === undefined -> !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Alex")); // Alex just logged in
console.log(loginUserMessage()); // undefined just logged in

// Multiple parameter in Function
function calculateCardPrice(...num1) {
    return num1
}

console.log(calculateCardPrice(200, 300, 400)); // [ 200, 300, 400 ]

function sumOfAllProducts(val1, val2, ...num) {
    return num
}

console.log(sumOfAllProducts(200, 400, 600, 900)); // [ 600, 900 ]

// pass Object in function
const user = {
    username: "Alex",
    age: 14
}

function handlObject(anyobject) {
    console.log(`User name is ${anyobject.username} and age is ${anyobject.age}`);
    
}

handlObject(user);


// pass Array in function
const number = [100, 400, 800]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(number));  // 400

















