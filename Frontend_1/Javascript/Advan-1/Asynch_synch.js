// Asynchronous : all the work start insame time . any work does not depend on other work .

// bellow code o/p will print as async way 
console.log("start");
console.log("Middle");
console.log("End");



// asynch

setTimeout(() => {   //settimeout is a inbuild function which accept a function  ,time (inside)
  console.log("start")
  
}, 3000) //3000
console.log("middle")
console.log("end")


// fetch, setTimeout, setInterval, promise,callcack,async/await,.time,.catch,.finally all are asynchronous (how do you undedrstand which code from anunc and which one sync)

