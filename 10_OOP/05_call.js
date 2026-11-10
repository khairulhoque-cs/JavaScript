// Call and this in javascript
function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);  // <--- explicitly bind 'this'

    this.email = email;
    this.password = password;
}

const alex = new createUser("alex", "alex@gmail.com", "123");
console.log(alex);
