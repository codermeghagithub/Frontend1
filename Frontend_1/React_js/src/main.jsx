// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./style.css";
// const root = createRoot(document.getElementById("root"));
// const h1 = React.createElement(
//   "h1",
//   { className: "title" },
//   "That is a very good news"
// );

// root.render(
//   <App />
//   // h1
//   // <>   //its called fregment
//   // <div>
//   // <h2>hi </h2>
//   // <h1>Hi Good afternoon Everyone</h1>
//   // <div>
//   //  hardwork Karte raho
//   // </div>

//   // </div>
//   // </>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; // Make sure the path is correct
import "./style.css"  //tailwind
import { Practices } from './Practices';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

root.render(<Practices />);
