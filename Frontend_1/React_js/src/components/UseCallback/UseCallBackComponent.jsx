import React, { useEffect,useRef,useState,useMemo,useCallback} from 'react';
import Navbar from './Navbar';

const UseCallBackComponent = () => {
  const [count,setCount]=React.useState(0);
  const [adjective,setAdjective]=useState("Good")
  
  const getAdjective=useCallback(()=>{
    return "Another"
  },{})
 
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-800 text-white'>
    
    <Navbar adjective={adjective} getAdjective={getAdjective}/>
   <button onClick={()=>setAdjective("Megha")}>
    Change Value
   </button>

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
  - Decrease
</button>

</div>
</div>
  )
}

export default UseCallBackComponent








