import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="min-h-[6rem] min-w-[18rem] max-w-8xl p-4">
      <div className="navbar shadow-xl rounded-box bg-base-100">
        <img className="p-[.4rem]" src={logo} alt="logo" width="48"/>
      </div>
      </div>
    </div>
  );
}

export default App;
