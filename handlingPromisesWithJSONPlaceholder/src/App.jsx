import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const requestHTTP = fetch("https://jsonplaceholder.typicode.com/albums")
    console.log(requestHTTP)

  requestHTTP
    .then((Response) => Response.json())
    .then((json)=>{
    console.log(json)
  })
  .catch((error) =>{ 
    console.log("Error message",error)
  })
    return(
      <>
        Hello
      </>
    )
}

export default App
