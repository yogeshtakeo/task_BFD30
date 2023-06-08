import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState to update the state
  const [state, setState] = useState(0)

  const getState= async()=>{
    const jsonObject= await fetch("https://www.reddit.com/r/popular.json")
    const jsObject=await jsonObject.json()
    setState(jsObject)
  }

  return (
    <>
      
    </>
  )
}

export default App
