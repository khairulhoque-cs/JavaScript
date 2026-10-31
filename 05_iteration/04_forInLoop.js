// for-in Loop

// Apply for-in LOOP in Object
const myObjects = {
    js: 'JavScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


for (const key in myObjects) {
    console.log(`${key} shortcut is for ${myObjects[key]}`);
}

// Apply for-in LOOP in Array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in object) {
    console.log(key);
    console.log(programming[key]);
    
}