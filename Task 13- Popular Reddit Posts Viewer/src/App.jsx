import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    
    const RedditInfo = async() => {
    try{
    const jsonObject = await fetch("https://www.reddit.com/r/popular.json")
    const jsObject = await jsonObject.json()

    setState(jsObject)
    }
    catch(error){
    console.log("You have an error!!!")
    }
    }
    RedditInfo();
    }, [])

  return (
    <>
      <h1>{state.data}</h1>
    </>
  )
}

export default App
