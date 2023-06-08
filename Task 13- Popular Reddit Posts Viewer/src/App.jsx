import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let state = {};

  console.log(state)

  const RedditInfo = async() => {
    const jsonObject = await fetch("https://www.reddit.com/r/popular.json")
    const jsObject = await jsonObject.json()

    console.log(state)
  }

  return (
    <>
      
    </>
  )
}

export default App
