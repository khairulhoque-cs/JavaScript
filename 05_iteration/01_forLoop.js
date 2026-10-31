// for Loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

// Nested for Loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);

    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

// apply for loop in array
let myArray = ["batman", "flash", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// continue, break

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of index is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of index is ${index}`);
}
