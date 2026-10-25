//********* DATES ********

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

// Create Date By your own format
let myNewDate = new Date("2023-01-17")
console.log(myNewDate.toLocaleString());


//****** Time ******* 

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// Customise Date and Time

newDate.toLocaleString('default', {
    weekday: "long",
})










