import React from 'react'

const App = () => {
  const [count,setCount]=React.useState(0);
  return (
    <div className='flexflex-col items-center justify-center h-screen bg-zinc-800 text-white'>
<div className='flex flex-row items-center justify-center gap-4'>
<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+ Add
</button>
<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+ Remove
</button>
    </div>
    </div>
    
  )
}

export default App