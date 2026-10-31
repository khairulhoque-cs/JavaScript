// for of Loop
/*
NOTE:
["", "", ""]
[{}, {}, {}]
*/

// Apply for-of Loop in array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

// Apply for-of Loop in string
const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()

map.set('IN', 'INDIA')
map.set('Fr', 'France')

console.log(map);

// Apply for-of loop in Map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Apply for-of in Object
const myObjects = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObjects) {
    console.log(key, ':-', value); // TypeError: myObjects is not iterable
}


