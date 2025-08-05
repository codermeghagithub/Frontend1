// inside the existing function when we pass other function as an argument it's called callbacks

// function greet(name,callback)
// {
//   console.log(`hello,${name}`);
//   callback()
// }
// function sayBye()
// {
//   console.log("GoodBye")
// }
// greet("Megha",sayBye)


// console.log("Boil water")
// setTimeout(()=>{
//   console.log("cut vaies")
// },2000);
// console.log("put your maggi")



// CALLBACK HELL


// it is bad pracice of CALLBACK HELL
// loginUser("alice", function (user) {
//   getUserProfile(user.id, function (profile) {
//     getUserPosts(profile.id, function (posts) {
//       displayPosts(posts);
//     });
//   });
// });



// Solutions to Callback Hell
// ✅ 1. Named Functions

// function handlePosts(posts) {
//   displayPosts(posts);
// }

// function handleProfile(profile) {
//   getUserPosts(profile.id, handlePosts);
// }

// function handleUser(user) {
//   getUserProfile(user.id, handleProfile);
// }

// loginUser("alice", handleUser);







// SETTIMEOUT: IT IS NOT PART OF JS IT IS PART OF WEB API 

// setTimeout() and setInterval() are asynchronous timer functions used to schedule code execution after a delay or at regular intervals.

// setTimeout(()=>{
//   console.log("Hi")
// },3000)


// with parameter

// function greet(username){
//   console.log(`hello ${username}`)
// }
// setTimeout(greet,2000,"Alice")

// 🔄 Canceling with clearTimeout():

// The clearTimeout() method of the Window interface cancels a timeout previously established by calling Window.setTimeout().

// let id = setTimeout(() => console.log("Will not run"), 2000);
// console.log(id)
// clearTimeout(id);

// let count=0;
// let id=setInterval(()=>{
//   console.log(`Count: ${++count}`);
//   if(count===5)clearInterval(id)
// },1000)



console.log("Start");
setTimeout(() => console.log("Timer"), 0); // Will still run after the current call stack
console.log("End");