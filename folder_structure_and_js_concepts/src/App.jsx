import React, { useState } from "react";
import "./App.css";

console.log(React);

function App() {
  const [state, setState] = useState({});

  console.log("Running line 7");

  const getGithubInfo = async () => {
    const jsonObject = await fetch("https://api.github.com/users/Namsla");
    const jsObject = await jsonObject.json();
    setState(jsObject);
  };

  return (
    <>
      <p>
        Task 10: Retrieve and Display GitHub Profile Using GitHub API and JSX
        Components. Objective: Retrieve a student's GitHub profile data using
        the GitHub API URL and display it using JSX components in a React
        project.
      </p>
      <div className="mainContainer">
        <div className="card">
          <img
            className="Nams"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzDwEmrBckbX8Xw7QraaiU-zfmIx4LpsW3g&usqp=CAU"
          />
          <h2>{state.name}</h2> <br />
          <h3>Look to the right for number of followers</h3>
          <h3> and number of poeple followed by Namkhang</h3> <br />
        </div>

        <div className="card2">
          <img className="Nams" src={state.avatar_url} />
          <h2>{state.login}</h2> <br />
          <h3>Followers: {state.followers}</h3>
          <h3>Following: {state.following}</h3> <br />
          <button onClick={getGithubInfo}>Unlock The User</button>
        </div>

        <div className="card3">
          <img
            className="Nams"
            src="https://media.tenor.com/2SeTinGEKNQAAAAd/codelikeagirl.gif"
          />
          <h2>{state.name}</h2> <br />
          <h3>Account creation time: {state.created_at}</h3>
          <h3> Account last updtated: {state.updated_at}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
