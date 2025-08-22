// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

// const mypromise=new Promise();  //how to create promise as basics 

// const mypromise=new Promise(()=>{
//   console.log("I will go tomorrow");
// })

//   console.log(mypromise);


// //  **  1. WE CAN FOLLOW THIS WAY 

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

//* promise 4   [base on error like if i workon file if file access if not that time what i will return ]
const fourthpromise=new Promise(function(resolve,reject){
  setTimeout(function(){
let error =true;
if(!error){
  resolve({username:"MEgha",password:"12@"})
}
else{
reject("Error : something went wrong ")
}
  },1000)
})

fourthpromise.then((user)=>{
console.log(user);
return user.username
}).then(()=>{

})


// 

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
