import React, { useEffect, useState } from 'react'

const App = () => {
  const [time,setTime]=useState(0);





  // without dependency arr
  //   useEffect(()=>{

  //     console.log("rendering.....")
  //     setTimeout(()=>{
  //     setTime(time+1)
  //   },1000);
  // });

    // with dependency arr
 useEffect(()=>{

      console.log("rendering.....")
      setTimeout(()=>{
      setTime(time+1)
    },1000);
  },[time]);

   // empty dependency arr =>only one time update
  //   useEffect(()=>{

  //     console.log("rendering.....")
  //     setTimeout(()=>{
  //     setTime(time+1)
  //   },1000);
  // },[]);


  return <h1 className=" bg-amber-50">the current time is{time}</h1>
  
}

export default App