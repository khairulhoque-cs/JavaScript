class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const alex = new User("alex")
// console.log(alex.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const david = new Teacher("david", "david@gmail.com")
david.logMe();
console.log(david.createId()); // TypeError: david.createId is not a function


