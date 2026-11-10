
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const alex = new Teacher("alex", "alex@gmail.com", "123@abc")
alex.addCourse() // A new course was added by alex

const bob = new User("bob")

bob.logMe() // Username is bob

console.log(alex instanceof User); // true

