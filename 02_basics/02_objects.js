// Objects

// 1. What is Object
/* An object in JavaScript is a collection of key-value pairs. 
Keys are also called properties, and values can be strings, 
numbers, booleans, arrays, functions, or other objects.
*/

const user = {
    name: "Khairul",
    age: 19,
    isLoggedIn: false
};

// 2. Types of Object Creation

// Object literal:
const user = { name: "Khairul", age: 19 };

// singleton -> object.create  Object.create(): Creates an object with a specified prototype.
const user = new Object();
user.name = "Khairul";

// Object Literals
const mySym = Symbol("key1");

const jsUser = {
    name: "khairul",
    "full name": "khairul Hoque",
    [mySym]: "myKey1",
    age: 19,
    email: "user@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// 3. Accessing and Updating Properties
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "user1@gmail.com" 

/*4. Object.freeze()prevents adding, deleting, or 
changing an object's existing properties. */

Object.freeze(jsUser)              
jsUser.email = "user@google.com"
console.log(jsUser); 

/*
Note: Freezing is shallow; nested objects can still be modified unless 
they are frozen separately. */

jsUser.greeting = function() {
    console.log("hello JS user");
}

console.log(jsUser.greeting());

jsUser.greeting1 = function() {
    console.log(`hello JS user ${this.name}`);
}

console.log(jsUser.greeting1());

// singleton Object
const tinderUser = new Object()
console.log(tinderUser);

tinderUser.id = "1234ab"
tinderUser.name = "Alex"
tinderUser.isLoggedIn = false

// Prototype
console.log(tinderUser); // OUTPUT: { id: '1234ab', name: 'Alex', isLoggedIn: false }
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// nested Object and Access Syntax
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Beta",
            lastname: "Alex"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// Multiple Object Concatination syntax
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5);

const obj6 = {...obj1, ...obj2}
console.log(obj6);

// Object in Array form
const users = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 2,
        email: "hello1@gmail.com"
    }
]

users[1].email


const course = {
    courseName: "JavaScript",
    price: "999",
    CourseInstructor: "Khairul"
}

// course.CourseInstructor

const {CourseInstructor} = course
console.log(CourseInstructor);


// API
// JSON Value
/*
{
    "name": "Khairul",
    "coursename": "Python",
    "price": "450"
}
*/



/* 
NOTE:
Reference: 
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign]
*/












