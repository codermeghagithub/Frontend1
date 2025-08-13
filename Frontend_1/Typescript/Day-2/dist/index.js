"use strict";
function greet(username) {
    return `Hello ${username}` + 1;
}
console.log(greet("Megha"));
// **👨🏻‍💻 Example 2: Arrow Function
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 5));
const student = {
    name: "Megha",
    age: 22,
    greet: function (country) {
        return `Welcome My name is ${this.name} ,I am ${this.age} yrs old and coun ${country}`;
    }
};
const student2 = {
    name: "Snita",
    age: 20,
    greet: function (country) {
        return `Welcome My name is ${student2.name} ,I am ${student2.age} yrs old and coun ${country}`;
    }
};
const introduction = (student) => {
    // ** destucture
    const { name, age } = student;
    return `Welcome My name is ${name} ,I am ${age} yrs old`;
};
console.log(introduction(student));
console.log(student.greet("India"));
console.log(student2.greet("India"));
