
## 🧠 1. **Functions in TypeScript**

Functions are the building blocks of TypeScript. You can define:
###  ✅ What is Type Annotation in TypeScript?
Type Annotation is the way we explicitly tell TypeScript what type a variable, function parameter, or return value should have.

### 💡 Why Use Type Annotations?
To prevent bugs by catching type errors early.

To improve code clarity and readability.

To get better autocomplete and hints from editors like VS Code.
📌 Syntax:
```
let variableName: Type = value;
```

#### 🧾 Examples of Type Annotations:
🔹 1. Variable
```
let age: number = 25;
let name: string = "Sneha";
let isAdmin: boolean = false;
```
# ✅ Type Inference vs Type Annotation

| Feature           | Type Inference                          | Type Annotation                          |
|-------------------|------------------------------------------|-------------------------------------------|
| **Who decides type?** | TypeScript guesses automatically       | You manually specify the type             |
| **Example**          | `let x = 10;`                           | `let x: number = 10;`                     |
| **Use case**         | Good for simple cases                  | Preferred when clarity or precision needed |



* **Parameter types** to ensure correct input
* **Return types** to ensure correct output


### 🧪 Example 1: Named Function

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Suraj")); // Hello, Suraj
```

* `name: string` → only accepts strings.
* `: string` after function → ensures the function returns a string.

### 🧪 Example 2: Arrow Function

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 3)); // 8
```

You **must** define both input types and return type when clarity is needed.

---

## 🧠 2. **Type Inference**

TypeScript is smart. When you assign a value, it **infers the type** behind the scenes.

```ts
let message = "Hello"; // inferred as string
let count = 42;        // inferred as number
```

Trying to assign a different type will throw an error:

```ts
// message = 100; ❌ Error: Type 'number' is not assignable to type 'string'
```

### 🧠 Why It’s Useful?

* Less boilerplate
* Still strict & type-safe
* Good for rapid development

---

## 🧠 3. **Optional & Default Parameters**

### ❓ Do we always need to use ? for optional parameters in TypeScript?
👉 Yes, in TypeScript, when you want to make a function parameter optional, you must use the ? syntax.

**✅ Syntax:**
```
function myFunction(param1: string, param2?: number): void {
  // param2 is optional
}
```

### ✅ Optional Parameters

Use `?` after the parameter name to make it optional.

```ts
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, age ${age}`;
  }
  return `Hello ${name}`;
}
```

### ✅ Default Parameters

You can provide a **default value** if no value is passed.

```ts
function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

### 🧪 Output

```ts
console.log(greet("Suraj"));      // Hello Suraj
console.log(greet("Suraj", 22));  // Hello Suraj, age 22
console.log(multiply(5));         // 10
console.log(multiply(5, 3));      // 15
```

---

## 🧠 4. **Arrays in TypeScript**

#### ✅ Valid Array Declarations in TypeScript:

let arr1: number[] = [1, 2, 3];           // ✅ shorthand syntax

let arr2: Array<number> = [4, 5, 6];      // ✅ generic syntax

let arr3: number[] = new Array<number>(3); // ✅ constructor + type

### ✅ 1. Basic Declaration

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];
```

### ✅ 2. Using Constructor

```ts
let arr = new Array<number>(3); // creates array of size 3
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
```

## ✅Show me how to create an array using a constructor in JavaScript and TypeScript, and also explain the difference between JavaScript and TypeScript.

#### ✅ 1. Array using Constructor in JavaScript
```
// JavaScript
let arr = new Array(3); // Creates an array with length 3
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr); // Output: [10, 20, 30]
```
**JavaScript is dynamically typed, so you don't specify the type of elements.**

You can mix types:

```
let arr = new Array(3);
arr[0] = 10;
arr[1] = "hello";
arr[2] = true;
```


#### ✅ 2. Array using Constructor in TypeScript
```
// TypeScript
let arr = new Array<number>(3); // Creates a number array of length 3
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr); // Output: [10, 20, 30]
```

**TypeScript is statically typed, so you define the type using <number> or : number[].**

### ✅ 3. Using `Array.of()`

```ts
let arr: number[] = Array.of(10, 20, 30); // [10, 20, 30]
let names: string[] = Array.of("Megha", "Sneha");

console.log(arr);    // Output: [10, 20, 30]
console.log(names);  // Output: ["Megha", "Sneha"]

```
You can also use TypeScript’s generic syntax:

```
let arr = Array.of<number>(1, 2, 3); // ✅ type inferred as number[]
```

🔍 You can also do `Array<string>` if you prefer generic syntax.

---

## 🧠 5. **Objects in TypeScript**

An object in TypeScript is a collection of key-value pairs, where the keys are strings (or symbols), and the values can be of any specified type.

Unlike JavaScript, TypeScript allows you to define types for the shape (structure) of an object using:

▫️ Inline types

▫️Type aliases

▫️Interfaces

TypeScript lets you **define object structure explicitly**.

### ✅ Example

```ts
let user: { name: string; age: number } = {
  name: "Suraj",
  age: 25,
};
```

### ✅ Optional Properties

```ts
let product: { title: string; price?: number } = {
  title: "Book",
};
```

You must match the **type structure** strictly, or TypeScript will throw an error.

---

## 🧠 6. **Type Alias**

A type alias lets you **reuse complex types** with a custom name.

### ✅ Example

```ts
type User = {
  name: string;
  age: number;
};

const u1: User = {
  name: "Suraj",
  age: 23,
};
```

💡 **Why use it?**

* DRY (Don’t Repeat Yourself)
* Readable & maintainable code
* Can extend easily

---

## 🧠 7. **Function Call Signatures** (Function Types)

You can define **types for functions** using a `type`.

defines the parameter types and return type of a function. This is especially useful when:

▫️You want to define a variable that holds a function.

▫️You want to enforce that a function follows a specific signature (structure).
### ✅ Example

```ts
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5
```

This ensures that any function using `MathOperation`:

* Takes 2 numbers
* Returns a number

---

## 🧠 8. **Enums in TypeScript**

Enums represent **a fixed set of named constants**.
By default, enums start from 0 and increment by 1.

### ✅ Numeric Enum (default)

```ts
enum Direction {
  North, // 0
  South, // 1
  East,  // 2
  West,  // 3
}

let dir: Direction = Direction.North;
console.log(dir); // 0
```

### ✅ String Enum

```ts
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
}

let status: Status = Status.Success;
console.log(status); // SUCCESS
```

### ✅ Why Enums?

* Improves **readability**
* Prevents **magic strings**
* Safer than plain strings or numbers

---

## ✅ Summary Table:

| Concept                 | Feature Type              | Purpose / Use Case                       |
| ----------------------- | ------------------------- | ---------------------------------------- |
| Functions               | `: type`                  | Control input/output types               |
| Type Inference          | Automatic                 | Let TS guess types, while staying strict |
| Optional/Default Params | `?`, `=`                  | Flexibility in function parameters       |
| Arrays                  | `type[]` or `Array<type>` | Typed collections                        |
| Objects                 | `{ key: type }`           | Explicit shape of objects                |
| Type Alias              | `type Name = ...`         | Reuse & simplify complex types           |
| Function Types          | `(a: T, b: T) => T`       | Describe function structure as a type    |
| Enums                   | `enum`                    | Named constants for fixed values         |



### 👉🏻In TypeScript, the ?? operator is called the Nullish Coalescing Operator.

### ✅ What it does:
The ?? operator returns the right-hand side value only if the left-hand side is null or undefined.

It is used to provide a default value only when the variable is nullish (i.e., null or undefined), not when it's a falsy value like 0, false, or "".

#### ✅ Syntax:
```
let result = value ?? defaultValue;
```
If value is null or undefined, result will be defaultValue.

Otherwise, result will be value.

### ✅ Example 1:
```
let name: string | null = null;
let displayName = name ?? "Guest";

console.log(displayName); // Output: Guest
```



