// ** when we have snall dsta we store IN THIS WAY**
// let mydetails :[string,number,boolean]=["Megha",22,true]

// ** when we have big dsta we stro IN THIS WAY**
// type coursetype={
//   id:String,
//   name:string,
//   tags:string[];

// }
// let mydetails: [coursetype,coursetype,number]=[
//   {
// id:"1",
//   name:"Megha",
//   tags:["fullstack","python"]
//   },
//     {
// id:"1",
//   name:"sneha",
//   tags:["stack","c"]
//   },
//   12
// ]



// FUNCTION 

// function greet(name:string,id:number){
//   console.log(`Welcome ${name} your id : ${id}`);
// }
// greet("Megha",20)

// ARROW FUNCTION
// const greet=(name:string,id:number)=>{
//   console.log(`Welcome ${name} your id : ${id}`);
// }
// greet("Megha",20)



// // FUNCTION RETURN TYPE
// const greet=(name:string,id:number):string=>{
// return  `Welcome ${name} your id : ${id}`
// }
// const mygreet=greet("Megha",20)
// console.log(mygreet)

// we can also follow this way 
const greet=(name:string,id:number):string=> `Welcome ${name} your id : ${id}`

const mygreet=greet("Megha",20)
console.log(mygreet)

// function printId(id: string | number) {
//   if (typeof id === "string") {
//     console.log("ID is a string:", id.toUpperCase());
//   } else {
//     console.log("ID is a number:", id.toFixed(2));
//   }
// }
// printId("abc");
// printId(123);



// Q1
// write a function ispallindrom input is string 

const ispallindrom=(pallin_no:string):boolean=>{
  let mypallin=pallin_no.split("").reverse().join("");
  return mypallin===pallin_no;
}
let res=console.log(ispallindrom("Megha"));
console.log(res);

