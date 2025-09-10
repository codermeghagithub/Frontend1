import { useState } from "react";

const UsestateComponent = () => {
  const[age,setAge]=useState(22)

  const increaseBy1=()=>{
   setAge(age+1)
   console.log(age);
   }

   const increaseBy3=()=>{
    setAge(age+3)
    console.log(age);
    
   }
  return (
    // * without tailwind css 
    // <div>UsestateComponent
    // <h1>My age:{age}</h1>
    // <button onClick={increaseBy1}>Increse 1</button>
    // <button onClick={increaseBy3}>Increse 3</button>
    // </div>
//

    <div className="bg-white text-black p-6 min-h-screen">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">UseState Component</h2>
        <h1 className="text-xl mb-6 text-blue-600">My age: {age}</h1>
        <div className="space-y-4">
          <button 
            onClick={increaseBy1}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mr-4"
          >
            Increase 1
          </button>
          <button 
            onClick={increaseBy3}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Increase 3
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsestateComponent