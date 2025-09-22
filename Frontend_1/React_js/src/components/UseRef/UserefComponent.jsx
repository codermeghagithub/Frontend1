import React from 'react'
import { useEffect,useRef } from 'react'
const UserefComponent = () => {
  const [count,setCount]=React.useState(0);

  const  countref=useRef(0);

  useEffect(()=>{
    countref.current=countref.current+1;
    console.log("Rendering App  Component",countref.current);
    
  })
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-800 text-white'>
<div className='flex flex-row items-center gap-4'>
<button
 onClick={()=>setCount(count+1)} 
 className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 px-4 rounded'>
  +Add
 </button>
 <span className="text-2xl font-bold">{count}</span>
<button 
onClick={()=>setCount(count-1)}
className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
  - Remove
</button>
</div>
    </div>
  )
}

export default UserefComponent








