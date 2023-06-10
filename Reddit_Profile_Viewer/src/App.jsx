import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GetReddit from "./GetReddit.jsx";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <h2>Falsy Reddit</h2>
        <input type="text" name="search" id="search-bar" placeholder="search" />
        <button className="login-button">Login</button>
      </div>
      <div className="section">
        <div className="ads">This is ads section</div>
        <div className="trending">
          <h2>Treding Today</h2>
          <GetReddit />
        </div>
      </div>
    </>
  );
}

export default App;
