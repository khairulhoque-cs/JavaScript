// while, do-while loop

let index = 0;

while (index <= 10) {
    console.log(`value of inner is ${index}`);
    index = index + 2;
}

// while loop apply in array
let myArray = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

// do-while loop
let score = 1;

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);