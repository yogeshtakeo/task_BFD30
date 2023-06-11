import React,{ useEffect, useState } from 'react'
import Profiles from './Profiles.jsx'
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
   
      <Profiles/>     
          
    </>
  )
}

export default App
