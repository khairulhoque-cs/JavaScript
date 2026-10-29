// Immediately Invoked Function Expressions (IIFE) -> ()()

// named IIFE
(function cars() {
    console.log(`DB CONNECTED`);
})();

// unnamed IIFE
( (name) => {
    console.log(`hello ${name}`);  // hello Alex
})('Alex')


