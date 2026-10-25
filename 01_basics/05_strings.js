const name = "Khairul"
const repoCount = 7

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Khairul-Hoque')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4) // slice: Received Negative value
console.log(anotherString);

const string1 = " khairul "
console.log(string1.trim());

const url = "https://khairul.com/khairul%20hoque"
console.log(url.replace('%20', '-'));
console.log(url.includes('khairul'));


















