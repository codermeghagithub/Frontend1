## Map:
Map Object is a built-in JavaScript data structure that stores key-value pairs where keys can be of any data type (unlike regular objects where keys are strings/symbols).

### **Creating a Map**
**Empty Map:**
```js
let myMap = new Map();
console.log(myMap); // Map(0) {}
```

###  Map with initial data

```js
let  myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['city', 'Pirirchak']
]);
console.log(myMap); // Map(3) {"name" => "Megha", "age" => 22, "city" => "Pirirchak"}
```
**So the format you see (Map(3) {"name" => "Megha", "age" => 22, "city" => "Pirirchak"}) is JavaScript's native Map object representation - it's specifically designed to show that this is a Map (not an Object) and uses => to clearly indicate the key-value relationships.**

### Adding Data to Map (Using .set(key, value))
```js 
javascriptlet myMap = new Map();

// Adding different types of keys
myMap.set('name', 'Megha');           // String key
myMap.set(1, 'Number One');           // Number key
myMap.set(true, 'Boolean True');      // Boolean key
myMap.set([1,2], 'Array Key');        // Array key
myMap.set({id: 1}, 'Object Key');     // Object key

console.log(myMap);
// Map(5) {
//   "name" => "Megha",
//   1 => "Number One", 
//   true => "Boolean True",
//   [1,2] => "Array Key",
//   {id: 1} => "Object Key"
// }
```
### Chaining .set() calls
```js
let myMap = new Map();
myMap.set('firstName', 'Megha')
     .set('lastName', 'Sharma')
     .set('age', 22);

console.log(myMap); // Map(3) {"firstName" => "Megha", "lastName" => "Sharma", "age" => 22}
```
### Getting Data from Map (Using .get(key))
```js
let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

console.log(myMap.get('name'));     // "Megha"
console.log(myMap.get('age'));      // 22
console.log(myMap.get('unknown')); // undefined
```

### Checking if Key Exists (Using .has(key)) 
```js 
 let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22]
]);

console.log(myMap.has('name'));     // true
console.log(myMap.has('address'));  // false

// Use with if statement
if (myMap.has('age')) {
  console.log('Age is:', myMap.get('age')); // Age is: 22
}
```

### Getting Map Size Using .size property
```js 
let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['city', 'Pirirchak']
]);

console.log(myMap.size); // 3

// Adding more items
myMap.set('hobby', 'drawing');
console.log(myMap.size); // 4
```

### Deleting Data ( Using .delete(key))

```js
let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['city', 'Pirirchak']
]);

console.log('Before delete:', myMap.size); // 3

**Delete specific key**

let deleted = myMap.delete('age');
console.log('Deleted successfully:', deleted); // true
console.log('After delete:', myMap.size);      // 2
console.log(myMap.has('age'));                 // false

// Trying to delete non-existent key
let result = myMap.delete('unknown');
console.log(result); // false

```

### Using .clear() - Delete all

let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['city', 'Pirirchak']
]);

console.log('Before clear:', myMap.size); // 3

myMap.clear();
console.log('After clear:', myMap.size);  // 0
console.log(myMap); // Map(0) {}

### **Iterating Through Map**( for...of loop)

let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

// Get both key and value
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Megha
// age: 22
// village: Pirirchak

### Method 2: .forEach()

let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Megha
// age: 22
// village: Pirirchak

### Method 3: Iterate keys only

let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

// Using .keys()
for (let key of myMap.keys()) {
  console.log('Key:', key);
}
// Output:
// Key: name
// Key: age
// Key: village

### Method 4: Iterate values only
let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

// Using .values()
for (let value of myMap.values()) {
  console.log('Value:', value);
}
// Output:
// Value: Megha
// Value: 22
// Value: Pirirchak

### Converting Map to Other Formats Map to Array

let myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

// Convert to array of [key, value] pairs
let mapArray = [...myMap];
console.log(mapArray);
// [["name", "Megha"], ["age", 22], ["village", "Pirirchak"]]

// Get only keys as array
let keysArray = [...myMap.keys()];
console.log(keysArray); // ["name", "age", "village"]

// Get only values as array
let valuesArray = [...myMap.values()];
console.log(valuesArray); // ["Megha", 22, "Pirirchak"]
Map to Object (limited to string keys)
javascriptlet myMap = new Map([
  ['name', 'Megha'],
  ['age', 22],
  ['village', 'Pirirchak']
]);

// Convert to regular object
let obj = Object.fromEntries(myMap);
console.log(obj); // {name: "Megha", age: 22, village: "Pirirchak"}

### Practical Examples
Example 1: User Management

 let users = new Map();

// Adding users
users.set('user1', {name: 'Megha', email: 'megha@email.com'});
users.set('user2', {name: 'Rahul', email: 'rahul@email.com'});
users.set('user3', {name: 'Priya', email: 'priya@email.com'});

// Getting user info
console.log(users.get('user1')); // {name: 'Megha', email: 'megha@email.com'}

// Check if user exists
if (users.has('user1')) {
  console.log('User found!');
}

// List all users
users.forEach((userInfo, userId) => {
  console.log(`${userId}: ${userInfo.name} - ${userInfo.email}`);
});


## Common Methods Summary

| Method | Purpose | Returns | Example |
|--------|---------|---------|---------|
| `new Map()` | Create new Map | Map object | `let m = new Map()` |
| `.set(key, value)` | Add/Update | Map object (chainable) | `m.set('a', 1)` |
| `.get(key)` | Get value | Value or undefined | `m.get('a')` |
| `.has(key)` | Check if key exists | Boolean | `m.has('a')` |
| `.delete(key)` | Remove key-value | Boolean | `m.delete('a')` |
| `.clear()` | Remove all | undefined | `m.clear()` |
| `.size` | Get count | Number | `m.size` |
| `.keys()` | Get all keys | Iterator | `for(let k of m.keys())` |
| `.values()` | Get all values | Iterator | `for(let v of m.values())` |
| `.forEach()` | Iterate | undefined | `m.forEach((v,k) => {})` |