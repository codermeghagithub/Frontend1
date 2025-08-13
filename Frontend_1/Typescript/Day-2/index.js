function greet(username) {
    return "Hello ".concat(username) + 1;
}
console.log(greet("Megha"));
// **👨🏻‍💻 Example 2: Arrow Function
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 5));
var student = {
    name: "Megha",
    age: 22,
    greet: function (country) {
        return "Welcome My name is ".concat(this.name, " ,I am ").concat(this.age, " yrs old and coun ").concat(country);
    }
};
var student2 = {
    name: "Snita",
    age: 20,
    greet: function (country) {
        return "Welcome My name is ".concat(student2.name, " ,I am ").concat(student2.age, " yrs old and coun ").concat(country);
    }
};
var introduction = function (student) {
    // ** destucture
    var name = student.name, age = student.age;
    return "Welcome My name is ".concat(name, " ,I am ").concat(age, " yrs old");
};
console.log(introduction(student));
console.log(student.greet("India"));
console.log(student2.greet("India"));
