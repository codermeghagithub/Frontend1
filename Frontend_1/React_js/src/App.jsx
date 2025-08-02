// this is jsx code which is its usually use

// import React from "react";

// export const App=()=>{
//   return<h1>Hello, Everyone.</h1>
// }

// // this is actually happend behind the scene of react
// export const App=()=>{
//   return React.createElement("h1",null,"Hello Everyone")
// };

// import H1 from "./H1";

// function App() {
//   return <H1 />;
// }

// export default App;

// export const App=()=>{
//   return(

//   <div>
//   <div>
//     <img src="RRR-movie-review.webp"alt=""secret=""/>
//   </div>
//   <h2>Name:RRR</h2>
//   <h3>Rating:7.8</h3>
//   <p>A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.</p>
//   </div>
//   )
// }


// conditional statement 
import React from "react";
export const App = () => {
  

  // USING REACT FRAGMENT
  return (
    <React.Fragment>
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
    </React.Fragment>
  );
};

//? create component
const Netflixseries = () => {
  const mov_name="RRR";
  const rating="9.8";
  const Summary="Summary :A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set inpre-independent India."
let age=15;

// 3rd way 
// let canwatch ="Not Available";
// if(age>=18) canwatch="Watch Now";


// 4th way 
const canwatch=()=>{
if(age>=18) return "Watch now"
return "Not Available"
}

  // Dynamic value in jsx through Function calling 
const returnGenre=()=>{
  const Genre="Action";
  return Genre;
}

// 1: way 

// if (age<18){

//    return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//       <img
//         src="/RRR-movie-review.webp"
//         alt="RRR Poster"
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-5 space-y-2">
//        {/*{...} dynamic values in jsx */}
//         <h1 className="text-2xl font-bold text-gray-800">Name: {mov_name}</h1>  
//         <h3 className="text-lg font-semibold text-red-600">Rating:{rating}</h3>
//         <p className="text-gray-600 text-base leading-relaxed">
//           {Summary}
//         </p>

// {/* USing function call */}
// <p> Genre:{returnGenre()}</p>
// <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Not available </button>
//       </div>
//     </div>
//   );
// };

// 2nd way 




  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src="/RRR-movie-review.webp"
        alt="RRR Poster"
        className="w-full h-64 object-cover"
      />
      <div className="p-5 space-y-2">
       {/*{...} dynamic values in jsx */}
        <h1 className="text-2xl font-bold text-gray-800">Name: {mov_name}</h1>  
        <h3 className="text-lg font-semibold text-red-600">Rating:{rating}</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {Summary}
        </p>
{/* USing function call */}
<p> Genre:{returnGenre()}</p>
{/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Watch Now</button> */}


{/* 2nd way */}
{/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{age>=18 ?"Watch Now":"Not available"}</button> */}

{/* 3rd way  */}
{/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{canwatch}</button> */}

{/* 4th way */}

<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{canwatch()}</button>

      </div>
    </div>
  );
};




// 1. Variables
//? You can embed any js  variable within jsx by enclosing it in curly braces . the value of the variable will beinserted into the DOM at the respective location .

// Function calls 
// Function c, especially those that return jsx , can be invoked directly within your jsx 

