const accountId = 144723
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2  // Not allowed

accountEmail = "hello@gmail.com"
accountPassword = "98765"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
NOTE: Prefer not to use var because of issue in block scope and functional scope. 
*/





