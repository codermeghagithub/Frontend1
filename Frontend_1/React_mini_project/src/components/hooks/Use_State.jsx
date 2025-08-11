import { useState } from "react";
export const State=()=>{
  
// console.log(useState());
  // let array=useState();
  // console.log(array);
// }
const [count,setCount]=useState(0);
const handleButtonClick=()=>{
  setCount(()=>count+1) //callback function
}

  return(
    <>
   <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Value: {count}</h1>
        <button
          onClick={handleButtonClick}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors items-center justify-center"
        >Increment</button>
        </section>
    </>
  )
}