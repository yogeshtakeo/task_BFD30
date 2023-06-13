import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({});

  useEffect = () => 

  const popReddit = async() => {
    const jsonObject = await fetch("https://www.reddit.com/r/popular.json")
    const jsObject = await jsonObject.json()

    console.log(state)
  }

  return (
    <>
    <div> </div>
      
    </>
  )
}

export default App
