import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  const [state, setState] = useState({});
 
  useEffect(() => {
  const getGithubInfo = async () => {
    try{
      const jsonObject = await fetch('https://api.github.com/users/sandessth');
      const jsObject = await jsonObject.json();
    setState(jsObject);
    }
    catch(error){
      console.log("you got error!!!")
    }
  }
    getGithubInfo();
    
  }, [])

  const moreInfo = function(){
    
  }
  return (
    <>
    
      <div className="topMenu">
        <h2>Task 10: Retrieve and Display GitHub Profile Using GitHub API and JSX Components.
        </h2>
      </div>
      <div className="card">
        <div className="infoCard">
            <img className="pic" src = {state.avatar_url}/>
            <h3 className="name">Name: "{state.name}"</h3>
            <h3 className="name">ID: "{state.id}"</h3>
            <h3 className="name">Login ID: "{state.login}"</h3>
            <h3 className="name">Location: "{state.location}"</h3>
            <h3 className="name">Created: "{state.created_at}"</h3>
            <h3 className="name">Last Active: "{state.updated_at}"</h3>
            <a href = 'https://api.github.com/users/sandessth'> Goto api.git </a>
        </div>
        </div> 
    </>
  )
}

export default App
