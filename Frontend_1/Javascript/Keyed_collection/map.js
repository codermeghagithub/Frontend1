// ** Creating a Map

// let mymap=new Map();
// console.log(mymap)

// Map with initial data

// let map_1=new Map([
//   ['name','Megha'],
//   ['age',22],
//   ['city','Pirirchk']

// ]);
// console.log(map_1);  // *Map(3) { 'name' => 'Megha', 'age' => 22, 'city' => 'Pirirchk' } is JavaScript's native Map object representation 


// **Step 3: Adding Data to Map

// let myMap=new Map();

// myMap.set('name','Megha De');       // String key
// myMap.set(1,"Number one");           // Number key
// myMap.set(true, 'Boolean True');      // Boolean key
// myMap.set([1,2], 'Array Key');        // Array key
// myMap.set({id: 1}, 'Object Key');     // Object key
// console.log(myMap);


// **Chaining .set() calls

// let myMap = new Map();
// myMap.set('FN','Megha')
//  .set('LN',"De")
//  .set('age',22);
//  console.log(myMap);

//  **Getting Data from Map
// Using .get(key)
// let myMap = new Map([
//   ['name', 'Megha'],
//   ['age', 22],
//   ['village', 'Pirirchak']
// ]);

// console.log(myMap.get('name'));     // "Megha"
// console.log(myMap.get('age'));      // 22
// console.log(myMap.get('unknown'));  // undefined
 

// Checking if Key Exists Using .has(key)
// let myMap = new Map([
//   ['name', 'Megha'],
//   ['age', 22]
// ]);

// console.log(myMap.has('name'));     // true
// console.log(myMap.has('address'));  // false

// // Use with if statement
// if (myMap.has('age')) {
//   console.log('Age is:', myMap.get('age')); // Age is: 22
// }



// **Getting Map Size Using .size property
// let myMap = new Map([
//   ['name', 'Megha'],
//   ['age', 22],
//   ['city', 'Pirirchak']
// ]);

// console.log(myMap.size); // 3

// // Adding more items
// myMap.set('hobby', 'drawing');
// console.log(myMap.size); // 4



// **Deleting Data [Using .delete(key)]
// let myMap = new Map([
//   ['name', 'Megha'],
//   ['age', 22],
//   ['city', 'Pirirchak']
// ]);

// console.log('Before delete:', myMap.size); // 3

//** Delete specific key
// let deleted = myMap.delete('age');
// console.log('Deleted successfully:', deleted); // true
// console.log('After delete:', myMap.size);      // 2
// console.log(myMap.has('age'));                 // false

// Trying to delete non-existent key
// let result = myMap.delete('unknown');
// console.log(result); // false

// ** Using .clear() - Delete all
// let myMap = new Map([
//   ['name', 'Megha'],
//   ['age', 22],
//   ['city', 'Pirirchak']
// ]);

// console.log('Before clear:', myMap.size); // 3

// myMap.clear();
// console.log('After clear:', myMap.size);  // 0
// console.log(myMap); // Map(0) {}


// **Iterating Through Map for...of loop
// let myMap = new Map([
//   ['name', 'Megha'],
//   ['age', 22],
//   ['village', 'Pirirchak']
// ]);

// // ** Get both key and value
// for (let [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }

// **Iterate values only

// let myMap1 = new Map([
//   ['name', 'Megha'],
//   ['age', 22],
//   ['village', 'Pirirchak']
// ]);

// // Using .values()
// for (let value of myMap.values()) {
//   console.log('Value:', value);
// }


//  **Practical Examples Example 1: User Management

// let users = new Map();

// // Adding users
// users.set('user1', {name: 'Megha', email: 'megha@email.com'});
// users.set('user2', {name: 'Rahul', email: 'rahul@email.com'});
// users.set('user3', {name: 'Priya', email: 'priya@email.com'});

// // Getting user info
// console.log(users.get('user1')); // {name: 'Megha', email: 'megha@email.com'}

// // Check if user exists
// if (users.has('user1')) {
//   console.log('User found!');
// }

// // List all users
// users.forEach((userInfo, userId) => {
//   console.log(`${userId}: ${userInfo.name} - ${userInfo.email}`);
// });

// // ** Counting Items
// let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// let fruitCount = new Map();

// // Count each fruit
// fruits.forEach(fruit => {
//   if (fruitCount.has(fruit)) {
//     fruitCount.set(fruit, fruitCount.get(fruit) + 1);
//   } else {
//     fruitCount.set(fruit, 1);
//   }
// });

// console.log(fruitCount);
// // Map(3) {"apple" => 3, "banana" => 2, "orange" => 1}

// // Display results
// fruitCount.forEach((count, fruit) => {
//   console.log(`${fruit}: ${count}`);
// });

// let mymap=new Map([
// ['name', 'Megha'],
//   ['age', 22],
//   ['village', 'Pirirchak']])

//   // // Convert to array of [key, value] pairs
//   let myArray=[...mymap];
// console.log(myArray);

// // 
// let keysArray=[...mymap.keys()]
// console.log(keysArray); // ["name", "age", "village"]

// // Get only values as array
// let valuesArray = [...mymap.values()];
// console.log(valuesArray); // ["Megha", 22, "Pirirchak"]



//! Map vs Object Comparison  // Object limitations
let obj = {};
obj['name'] = 'Megha';
obj[1] = 'Number key becomes string';
console.log(obj); // {"1": "Number key becomes string", "name": "Megha"}

// Map advantages
let map = new Map();
map.set('name', 'Megha');
map.set(1, 'Actual number key');
map.set('1', 'String key');
console.log(map); 
// Map(3) {"name" => "Megha", 1 => "Actual number key", "1" => "String key"}

console.log(map.get(1));   // "Actual number key"
console.log(map.get('1')); // "String key"