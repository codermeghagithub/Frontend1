// // useref

// import React,{useEffect,useRef} from "react";
// const App = () => {
//   const [count,setCount]=React.useState(0);
//   const countRef=useRef(0);
//   const btnRef=useRef();


//   let count2=0;
// useEffect(()=>{
//   countRef.current=countRef.current+1;
//   console.log("Rendering App component",countRef.current);
// });
// const onChangeColor=()=>{
//   btnRef.current.style.backgroundColor="red"
// }

//   return (
//     <div className='flex flex-col items-center justify-center h-screen bg-zinc-800 text-white'>
// <div className='flex flex-row items-center justify-center gap-4'>


//     </div>
//     </div>
    
//   )
// }

// export default App


// import React, {useEffect} from 'react'
import UsestateComponent from "./components/Usestate/UsestateComponent"
const App = () => {
  return (
    <>
    <UsestateComponent/>
    {/* <UseReducerComponent/> */}
    {/* <UseEffectComponent/> */}
    {/* <UseRefComponent/> */}
    {/* <IndianGoverment/> */}
    {/* <UseLayOutComponent/>  */}
    </>
  )
}

export default App