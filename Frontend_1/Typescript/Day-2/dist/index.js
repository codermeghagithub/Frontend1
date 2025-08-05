"use strict";
function greet(username) {
    return `Hello ${username}` + 1;
}
console.log(greet("Megha"));
// 👨🏻‍💻 Example 2: Arrow Function
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
let numbers = [1, 2, 3, 4];
// let Uname: string | null = null;
// let displayName = Uname ?? "Guest";
// console.log(displayName); // Output: Guest
// // ✅ Valid Array Declarations in TypeScript:
// let arr1: number[] = [1, 2, 3];           // ✅ shorthand syntax
// let arr2: Array<number> = [4, 5, 6];      // ✅ generic syntax
// let arr3: number[] = new Array<number>(3); // ✅ constructor + type
// Array using Constructor in TypeScript
let marks = new Array(4);
marks[0] = 90;
marks[1] = 80;
marks[2] = 70;
marks[3] = 99;
console.log(marks);
let arr = Array.of(10, 20, 30); // [10, 20, 30]
let names = Array.of("Megha", "Sneha");
console.log(arr); // Output: [10, 20, 30]
console.log(names); // Output: ["Megha", "Sneha"]
// ✅ 1. Basic Object Syntax
let person = {
    name: "Megha",
    age: 22,
    isStudent: true
};
let student = {
    name: "Sneha",
    age: 21
};
const logMessage = (msg) => {
    console.log("Log:", msg);
};
logMessage("Hello!"); // Output: Log: Hello!
const multi = (a, b) => a * b;
// console.log(multiply(4, 5)); // Output: 20
// ✅ Interfaces can also define function types!
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
let move = Direction.Left;
console.log(move);
//  Using Enums in Functions
var UserResponse;
(function (UserResponse) {
    UserResponse["Yes"] = "YES";
    UserResponse["No"] = "NO";
})(UserResponse || (UserResponse = {}));
function respond(answer) {
    if (answer === UserResponse.Yes) {
        console.log("You said YES");
    }
    else {
        console.log("You said NO");
    }
}
respond(UserResponse.Yes); // Output: You said YES
