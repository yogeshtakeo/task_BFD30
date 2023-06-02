import { useState } from 'react'

import './App.css'
//import './Profile'
function App() {
  const profile= fetch('https://api.github.com/users/kabinathapa')
    console.log(profile)
    profile
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
    })
    .catch((error)=>{
      console.log("Error", error)
    })

  return (
    <>
   
    </>
  )
}

export default App
