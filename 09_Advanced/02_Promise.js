// How to Create a Promise
// Promise_01(Method_01)
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000);
})

promiseOne.then(function() {
    console.log('Promise consumed');
})

// (Method_02)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function() {
    console.log('async 2 resolved');
})


// (Method_03)
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Alex",
            email: "Alex@gmail.com"
        })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// (Method_04)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({
                username: "Bob",
                password: "1234"
            })
        } else {
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))


// (Method_05)
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({
                username: "Nano Bit",
                password: "1234"
            })
        } else {
            reject('ERROR: Something Went wrong')
        }

    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// (Method_06)
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);

    }
}

getAllUsers()

// (Method_07)
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))