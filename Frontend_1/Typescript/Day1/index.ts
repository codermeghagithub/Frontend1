let age:number=21;
let F_name:string="Megha";
let isActive: boolean=true;
// let big: bigint = 9007199254740991n;
let nothing: null = null;

// let sym1: symbol = Symbol("id");
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

let value: unknown = 10;
console.log("the age is :",age)

function  logmessage():void{
  console.log("Hello")
}

logmessage()



let array:[number,number,string]=[1,45,"Ram"];  //this IS LIST NOT ARRAY

let id:number|string="1011"

let role:"Megha"|"Bratati"|"Tanay"="Megha";

enum Status{
  PANDING,// enum sould  ALWAYS be  IN CAPITAL its better for programmer 
  SUCCESS,
  PROCESS,
  GO_AHEAD,
  

}
let pro :Status=Status.GO_AHEAD;
