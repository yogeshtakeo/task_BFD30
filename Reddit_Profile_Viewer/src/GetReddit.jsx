import React from "react";
import { useEffect, useState } from "react";

function GetReddit() {
  const [state, setState] = useState({});

  useEffect(() => {
    const getRedditData = async () => {
      try {
        const jsonObject = await fetch("https://www.reddit.com/r/popular.json");
        const jsObject = await jsonObject.json();
        setState(jsObject);
        console.log(jsObject);
      } catch (error) {
        console.log("this is error", error);
      }
    };

    getRedditData();
  }, []);

  return (
    <>
      <h1>{state.kind}</h1>
    </>
  );
}

export default GetReddit;
