function greet(username:String):string{
  return `Hello ${username}`+1;

}
console.log(greet("Megha"));

// 👨🏻‍💻 Example 2: Arrow Function
const add=(a:number,b:number):number=>{
return a+b;
}
console.log(add(2,5));


// optional parameters 
// ✅ 1. Optional Parameters
// Optional parameters are denoted using a ? after the parameter name. They can be skipped when calling the function.

function greetMyfunc(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}!`);
  }
}

greetMyfunc("Megha");           // Output: Hello Megha!
greetMyfunc("Megha", 22);       // Output: Hello Megha, you are 22 years o


// ✅ 2. Default Parameters
// Default parameters provide a default value if no argument is passed.

function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));     // Output: 10
console.log(multiply(5, 3));  // Output: 15

let numbers=[1,2,3,4];


// let Uname: string | null = null;
// let displayName = Uname ?? "Guest";

// console.log(displayName); // Output: Guest


  

// // ✅ Valid Array Declarations in TypeScript:

// let arr1: number[] = [1, 2, 3];           // ✅ shorthand syntax
// let arr2: Array<number> = [4, 5, 6];      // ✅ generic syntax
// let arr3: number[] = new Array<number>(3); // ✅ constructor + type

// Array using Constructor in TypeScript

let marks=new Array<number>(4);
marks[0]=90;
marks[1]=80;
marks[2]=70;
marks[3]=99;
console.log(marks);


let arr: number[] = Array.of(10, 20, 30); // [10, 20, 30]
let names: string[] = Array.of("Megha", "Sneha");

console.log(arr);    // Output: [10, 20, 30]
console.log(names);  // Output: ["Megha", "Sneha"]

// ✅ 1. Basic Object Syntax


let person:{
  name:string;
  age:number;
  isStudent:boolean;
}={
  name:"Megha",
  age: 22,
  isStudent: true
};

// Using type Alias for Objects
type Person = {
  name: string;
  age: number;

};

let student: Person = {
  name: "Sneha",
  age: 21
};



// 🔷 Example 2: Function Type for Logging

type Logger = (message: string) => void;

const logMessage: Logger = (msg) => {
  console.log("Log:", msg);
};

logMessage("Hello!"); // Output: Log: Hello!
// ✅ Logger says:

// "This function takes a string and returns nothing (void)."

// 🔷 Example 3: Function Type in Interface

interface MathOperation {
  (x: number, y: number): number;
}

const multi: MathOperation = (a, b) => a * b;

// console.log(multiply(4, 5)); // Output: 20
// ✅ Interfaces can also define function types!




enum Direction{
  Up,
  Down,
  Right,
  Left
}
let move : Direction=Direction.Left;
console.log(move);

//  Using Enums in Functions

enum UserResponse {
  Yes = "YES",
  No = "NO"
}

function respond(answer: UserResponse) {
  if (answer === UserResponse.Yes) {
    console.log("You said YES");
  } else {
    console.log("You said NO");
  }
}

respond(UserResponse.Yes); // Output: You said YES
