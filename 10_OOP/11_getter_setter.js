// Getter and Setter
// class based
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const alex = new User("alex@gmail.com", "123")
console.log(alex.password);
console.log(alex.email);

// function based
function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const bob = new User("bob@gmail.com", "bob");
console.log(bob.email);
console.log(bob.password);

// Object Based
const User = {
    _email: 'hexagon@gmail.com',
    _password: "bob@123",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const hexagon = Object.create(User)
console.log(hexagon.email);


