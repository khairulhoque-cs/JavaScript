// this

const user = {
    username: "Alex",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}

user.welcomeMessage() // Alex, welcome to website

user.username = "sam"
user.welcomeMessage() // sam, welcome to website

console.log(this);    // {}

// Other example
function one() {
    let userfirstName = "Alex"
    console.log(this.userfirstName);  // undefined
}

one()

// Other example
const two = function() {
    let username = "Alex"
    console.log(this.username); // undefined

}

two()

// Arrow function
const three = () => {
    let username = "Alex"
    console.log(this.username); // undefined
}

three()

// Arrow function syntax
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)); // 7

// Other way
const sumOfTwoNum = (num1, num2) => num1 + num2
console.log(sumOfTwoNum(5, 8));  // 13










