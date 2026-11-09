let myName = "Alex     "
let anotherUsername = "Bob   "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

console.log(myName.trueLength);
anotherUsername.trueLength();

// Example
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Alex = function(){
    console.log(`Alex is present in all objects`);
}
heroPower.Alex()

// inheritance
const user = {
    name: "Alex",
    email: "alex@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Python Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)




