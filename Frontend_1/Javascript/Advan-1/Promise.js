// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

// const mypromise=new Promise();  //how to create promise as basics 

// const mypromise=new Promise(()=>{
//   console.log("I will go tomorrow");
// })

//   console.log(mypromise);



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

const agePromise=new Promise((resolve,reject)=>{
  let age=12;
  if(age>=18)
  {
    resolve("you can do anything whatever you want")
  }
  else{
    reject("No you can not do anything without your mother permission")
  }
})
agePromise.then((confirm)=>{
console.log(confirm);
}).catch((Notpermitted)=>{
  console.log(Notpermitted)

}).finally(()=>{
    console.log("Always run this code ");

})
