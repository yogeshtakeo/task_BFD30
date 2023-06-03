import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState({});
  // const fetchData = fetch("https://api.github.com/users/ashmaupret100");
  useEffect(() => {
    getProfileInfo = async () => {
      const fetchObject = await fetch(
        "https://api.github.com/users/ashmaupret100"
      );
      const fetchData = await fetchObject.json();
      setState(fetchData);
    };
    getProfileInfo();
  }, []);

  //Promise handling using async await

  // Promise handling using then and catch
  // fetchData
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  return (
    <>
      <div className="main">
        <div className=""></div>
        <div className="card">{state.login}</div>
      </div>
    </>
  );
}

export default App;
