"use strict";
function greet(username) {
    return `Hello ${username}` + 1;
}
console.log(greet("Megha"));
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 5));
// optional parameters 
// ✅ 1. Optional Parameters
// Optional parameters are denoted using a ? after the parameter name. They can be skipped when calling the function.
function greetMyfunc(name, age) {
    if (age !== undefined) {
        console.log(`Hello ${name}, you are ${age} years old.`);
    }
    else {
        console.log(`Hello ${name}!`);
    }
}
greetMyfunc("Megha"); // Output: Hello Megha!
greetMyfunc("Megha", 22); // Output: Hello Megha, you are 22 years o
// ✅ 2. Default Parameters
// Default parameters provide a default value if no argument is passed.
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15
