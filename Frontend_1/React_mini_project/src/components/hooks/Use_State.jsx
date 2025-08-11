import { Children, useState } from "react";
export const State=()=>{

// console.log(useState());
  // let array=useState();
  // console.log(array);
// }
const [count,setCount]=useState(0);
console.log("Parent Component rendered")
const handleButtonClick=()=>{
  setCount(()=>count+1) //callback function
}

  return(
    <>
    <div className="main">  
   <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Value: {count}</h1>
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-400 transition-colors items-center justify-center"
        >Increment</button>
        </section>
        </div>
        <ChildComponent/>
    </>
  )
};


function ChildComponent()
{
  console.log("child Component rendered");
  return(
    <div className="main">   
    <h2 className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-bold">child Component</h2>
    </div>
  )
}


