import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GetReddit from "./GetReddit.jsx";

function App() {
  return (
    <>
      <div className="header">
        <h1>Popular Posts Of Reddit</h1>
        <input type="text" name="search" id="search-bar" placeholder="search" />
      </div>
      <GetReddit />
    </>
  );
}

export default App;
