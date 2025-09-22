import React, { useEffect,useRef,useState,useMemo} from 'react';
// ** 🔹 What is useMemo?
// **Expensive computations (like filtering, sorting, or math-heavy logic) are re-done every time.

// * This can cause performance issues.
// const nums=new Array(30_00_0000).fill(0).map((_,i)=>{
//   return{
//     index:i,
//     isMagical:i==29_00_0000
//   }
// })
const UseMemoComponent = () => {
  const [count,setCount]=React.useState(0);
   const[numbers,setNumbers]=useState(nums)   
  

  const magical=useMemo(()=>numbers.find(item=>item.isMagical),[]);
  //  const magical=numbers.find(item=>item.isMagical);

 
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-800 text-white'>
<div className='flex flex-row items-center gap-4'>
<button
 onClick={()=>setCount(count+1)} 
 className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 px-4 rounded'>
  +Add
 </button>
 <span className="text-2xl font-bold">{count} . {magical.index} </span>
<button 
onClick={()=>setCount(count-1)}
className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
  - Remove
</button>

</div>
    </div>
  )
}

export default UseMemoComponent








