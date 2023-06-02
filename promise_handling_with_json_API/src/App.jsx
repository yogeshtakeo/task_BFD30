import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Using Fetch funnction to fetch data from API
  const fetchData = fetch("https://jsonplaceholder.typicode.com/users");
  console.log(fetchData);

  //Handling promise returned by fetch using catch and then function
  fetchData
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error"));
  //Fetching data with incorrect url
  fetch("https://jsonplaceholder.typicode.com/wrongdata")
    .then((data) => console.log(data))
    .catch((error) => console.log("this is an error"));

  return <>hello</>;
}

export default App;
