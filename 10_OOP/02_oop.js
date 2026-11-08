const user = {
    username: "Alex",
    loginCount: 2,

    getUserDetails: function() {
        console.log("Get user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);

    }
}

console.log(user.username);
console.log(user.getUserDetails());

// Constructor function -> new
const promise = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Alex", 3, true);
const userTwo = new User("Bob", 10, true);
console.log(userOne.constructor);
console.log(userTwo);


