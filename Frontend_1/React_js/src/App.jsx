import React, { useState } from 'react'
import { Toaster ,toast} from 'react-hot-toast';

const App = () => {
const [username,setUsername]=useState("");
const [isPending,setIsPending]=useState(false);
const [data,setData]=useState(null);

const onSubmit=async(e)=>{
  e.preventDefault();
try{
  setIsPending(true);
  const res=await fetch(`https://api.github.com/users/${username}`);
  const data =await res.json();
  setData(data);
  toast.success("User found");
}
catch(error){
  toast.error('user not found');
}
finally{
setIsPending(false);
}
}

  return (
    <div className='bg-amber-50 dark:bg-zinc-900 w-full py-24flex flex-col justify-start items-center min-h-screen h-full'>

      <h1 className='text-5xl text-yellow-500 font-extrabold stoke-2'>welcome to Your Github Profile</h1>

      <div className='flex flex-row gap-3 justify-center items-center py-24 w-full'>
      <form onSubmit={onSubmit} className='w-full flex flex-row gap-3 justify-center'>
        <input type='text'placeholder='Enter your github username' className='px-4 py-4 rounded-md border border-zinc-500 bg-black/90 text-white max-w-3xl w-full'
        value={username}
        onChange={
          (e)=>setUsername(e.target.value)
        }
        />
        <button type='submit' className='px-4 py-4 rounded-md border bg-indigo-400 hover:bg-indigo-500 font-semibold text-white'>
          Search
        </button>
        </form>
      </div>
    </div>
  )
}

export default App