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



