// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

// const mypromise=new Promise();  //how to create promise as basics

// const mypromise=new Promise(()=>{
//   console.log("I will go tomorrow");
// })

//   console.log(mypromise);

// //  **  1. WE CAN FOLLOW THIS WAY


// ** 1st promise code 
// const Onepromise=new Promise(function(resolve,reject){
//    // **Do an asynch task
//   //  ** DB calls ,cryptography ,network

//   setTimeout(function(){
//     console.log("Asynch task is complete");
//     resolve()  // **through this we connect resolve with then
//   },1000)
// })

// Onepromise.then(function(){  //** .then use for resolved promise  */
//   console.log("Promise consume");
// })

//  **  2.OR WE CAN FOLLOW THIS WAY

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Asynch task is complete");
//     resolve();

//   },1000)

// }).then(function(){console.log("Asynch 2 resolved ");
// })

// * make a 3rd promise 3

// const thirdpromise=new Promise(function(resolve, reject){ setTimeout(function(){
//   resolve({username:"Megha",email:"meghade2003@gmail.com"})
// },5000)

// })

// thirdpromise.then(function(user){
//   console.log(user);

// })

// //* promise 4   [base on error like if i workon file if file access if not that time what i will return ]
// const fourthpromise = new Promise((resolve, reject)=> {
//   setTimeout(()=> {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Megha", password: "12@" });
//     } else {
//       reject("Error : something went wrong ");
//     }
//   }, 1000);
// });

// fourthpromise
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error)=> {  // **it is using arrow function callback.
//     console.log(error);

// // *you can also write using normal function callback.
//     // .catch(function(error) {
//   // console.log("Normal function:", error);
// }).finally(()=>console.log("Promise either resolved or rejected ."))




// ** we can  also use aynch await instead of .then .catch 
// const fifthpromise=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   let error =false;
//   if(!error){
//       resolve({username: "Megha", password: "12@"})
//   }else{
//     reject("Something  js went wrong.")
//   }
// },1000)
// });

// async function consumefifthpromise(){
//  try{
//   const response=await fifthpromise
//   console.log(response);
//  }catch(error){

//   console.log(error)
//  }
// }
// consumefifthpromise()


// ** 1st  way
// async function getAllusers(){
//   try{
//   const response=await fetch('https://jsonplaceholder.typicode.com/users');
//   const data=await response.json()// ** If i woud not  write await it does not give any o/p when data gives json format it take some time so  i have to write await  keyword 
//   console.log(data);
//   }catch(error){
//     console.log("E :",error); 
//   }
// }
// getAllusers()

// ** 2nd way  using  promis then catch 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
  
})


// creatING PROMISE

// const mypromise=new Promise((resolve,reject)=>{

//   //resolve
//   // Reject
// })

// // consume promises

// mypromise.then(()=>{}).catch(()=>{}).finally(()=>{})

// .then---> resolve() our promises resolved
// .catch----> REJECT() our promises rehected
// .FINALLY----> finally() our promises when our promices always executed

// const mypromise=new Promise((resolve,reject)=>{
//   // resolve({name:"Megha",age:21,isprogrammer:true});
//   reject({error:"something went wrong"})
// });
// mypromise.then((value)=>{
//   console.log(value)
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{
//   console.log("it always run")
// })

// condition if age<18 =>you can do whatever you want else=>you can not do anything without my permission by creating your own promise

// const agePromise=new Promise((resolve,reject)=>{
//   let age=12;
//   if(age>=18)
//   {
//     resolve("you can do anything whatever you want")
//   }
//   else{
//     reject("No you can not do anything without your mother permission")
//   }
// })
// agePromise.then((confirm)=>{
// console.log(confirm);
// }).catch((Notpermitted)=>{
//   console.log(Notpermitted)

// }).finally(()=>{
//     console.log("Always run this code ");

// })
