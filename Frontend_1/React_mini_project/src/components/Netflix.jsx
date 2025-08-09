//* 1. Variables //? You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

import seriesData from "../api/seriesData.json";

const Netflix = () => {

  return (
<ul>  
    {seriesData.map((curEle)=>{
      
     return(
       <li key={curEle.id}>
      <div>
        <img
          src={curEle.img_url}
          alt="/images/rrr.jpg"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name:{curEle.name}</h2>
      <h3>Rating:{curEle.rating}</h3>
      <p> Summary: {curEle.description}</p>
      <p>Genre:{curEle.genre}</p>
      <p>Cast:{curEle.cast}</p>
      <a href={curEle.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
    );
    })}
    </ul>
  );
};

export default Netflix;


