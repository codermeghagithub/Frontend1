import React from 'react';
import './State.css'; // Importing the CSS file

export const State = () => {
  let value = 0;

  const handleButtonClick = () => {
    value++;
    console.log(value);
  };

  return (
    <section className="dev">
      <h1>{value}</h1>
      <button onClick={handleButtonClick}>Increment</button>
    </section>
  );
};
