// const coding=["js","Ruby","c","c++","python"]

// const codeing_1=coding.forEach((item)=>{
//   console.log(item);
//   return item;  ///  The .forEach() method does not return anything
// })

// console.log(codeing_1);   


// const mynums=[1,2,3,4,5,6,7,8,9,10];
// // const newnums=mynums.filter((num)=>num>4)
// const newnums=mynums.filter((num)=>{
//   return num>4
// })

// console.log(newnums);

// const mynums=[1,2,3,4,5,6,7,8,9,10];
// const newnums=[];
// mynums.forEach((num) => {
//   if(num>4){
//     newnums.push(num)
//   }
// });
// console.log(newnums)


// Q

// const books = [
//   {
//     title: "To Kill a Mockingbird",
//     genre: "Fiction",
//     publishYear: 1960,
//     name: "Harper Lee"
//   },
//   {
//     title: "1984",
//     genre: "Dystopian",
//     publishYear: 1949,
//     name: "George Orwell"
//   },
//   {
//     title: "The Great Gatsby",
//     genre: "Classic",
//     publishYear: 1925,
//     name: "F. Scott Fitzgerald"
//   },
//   {
//     title: "The Hobbit",
//     genre: "Fantasy",
//     publishYear: 1937,
//     name: "J.R.R. Tolkien"
//   },
//   {
//     title: "Pride and Prejudice",
//     genre: "Romance",
//     publishYear: 1813,
//     name: "Jane Austen"
//   },
//   {
//     title: "The Catcher in the Rye",
//     genre: "Non-fiction",
//     publishYear: 1951,
//     name: "J.D. Salinger"
//   },
//   {
//     title: "Sapiens: A Brief History of Humankind",
//     genre: "Non-fiction",
//     publishYear: 2011,
//     name: "Yuval Noah Harari"
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     genre: "Fantasy",
//     publishYear: 1997,
//     name: "J.K. Rowling"
//   },
//   {
//     title: "The Da Vinci Code",
//     genre: "Mystery/Thriller",
//     publishYear: 2003,
//     name: "Dan Brown"
//   },
//   {
//     title: "The Alchemist",
//     genre: "Philosophical Fiction",
//     publishYear: 1988,
//     name: "Paulo Coelho"
//   }
// ];

// let usebooks=books.filter((bk)=>{return bk.genre==="Non-fiction"})
// console.log(usebooks);

// usebooks=books.filter((bk)=>{return bk.publishYear>1998 && bk.genre==="Non-fiction"})
// console.log(usebooks);



// let mynums=[1,2,3,4,5,6,7,8,9,10];
// let newnums= mynums.map((num)=>num+10)
// console.log(newnums)

// 2nd way toprint array
//  mynums=[1,2,3,4,5,6,7,8,9,10];
  // newnums= mynums.map((num)=>{ return num+10})
// console.log(newnums)



// chainning method 
// let mynums=[1,2,3,4,5,6,7,8,9,10];
// newnums= mynums
//                  .map((num)=>{ return num  + 5})
//                  .map((num)=>{return num*5})
//                  .filter((num)=>{return num>=50})
//                  .map((num)=>{return num%2===0})
// console.log(newnums);


// REDUCE METHOD 
// const nums=[1,2,3]
// const mytotal=nums.reduce(function(accumulator,currentvalue){
//   console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//   return accumulator+currentvalue
// },0)//,}0) this 0 is initial value of accumulator
// console.log(mytotal)


// 2nd way is arrow FUNCTION

// const nums=[1,2,3];
// const mytotal=nums.reduce((accumulator,currentvalue)=>{ return accumulator+currentvalue,0

// })
// console.log(mytotal)


const shoppingcard=[
  {
    itemName:"Lehanga",
    price:6000
  },
  {
    itemName:"jeans",
    price:1000
  },
    {
    itemName:"t-shirt",
    price:600
  },
    {
    itemName:"long kurti",
    price:800
  },
    {
    itemName:"long frok",
    price:2500
  },
  
]

const total_price=shoppingcard.reduce((acc,item)=>acc+item.price,0)
console.log(total_price)
