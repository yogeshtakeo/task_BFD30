import React,{ useEffect, useState } from 'react'
import Profiles from './Profiles.js'
import './App.css'

 function App() {
 
  //Handling promises with .then() and .catch() methods
  //const profile= fetch('https://api.github.com/users/kabinathapa')
    //console.log(profile)
    //profile
    //.then((response)=>response.json())
    //.then((data)=>{
      //console.log(data)
    //})
    //.catch((error)=>{
      //console.log("Error", error)
    //})

  return (
    <>
    <div className="outline">
      <Profiles/>
      <h2>{profile.login}</h2>
          {profile.id}
          <img src={profile.avatar_url} alt="Image" width="100px" height="200px"/>
          
          </div>
          
    </>
  )
}

export default App
