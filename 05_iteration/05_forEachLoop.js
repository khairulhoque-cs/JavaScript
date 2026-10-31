// for-Each LOOP

const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach( function (item) {
    console.log(item);

} )

// write for-Each Loop as a arrow function
coding.forEach( (item) => {
    console.log(item);
} )

// Apply for-Each loop in function
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

// NOTE:
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

// Apply for-Each Loop in array of Object -> [{}, {}]
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
} )