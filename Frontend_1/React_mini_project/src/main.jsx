import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { State } from "./components/hooks/State.jsx";
// import Profile from "./components/Profile.jsx";
// import { Practices } from "./Practices.jsx";
// import "./index.css";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <State />
  </React.StrictMode>
);