import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./TodoApp";

function App() {
  // const [state, setState] = useState;
  // const fetchData = async () => {
  //   const jsonObject = fetch();
  // };

  return <>{TodoApp()}</>;
}

export default App;
