// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const alex = new User("Alex", "alex@gmail.com", "123")
console.log(alex.encryptPassword());
console.log(alex.changeUsername());


// behind the scene
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}` 
}

const bob = new User("bob", "bob@gmail.com", "123")
console.log(bob.encryptPassword());
console.log(bob.changeUsername());

