import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [state, setState] = useState({})

  useEffect(() => {
    
    const profile = fetch('https://api.github.com/users/jharanatmg')

    profile
    .then((response) => {
      const jsonPromise = response.json()
      .then((jsPromise) => {
        setState(jsPromise)
      })
      console.log('first')
    })
    .catch((error) => console.log("This is an error", error))
    
  }, [])

  return (
    <>
    <div className='box'> 
      <div className='card'>
        <h1> GitHub Profile </h1>
      </div>
      <div className='one'>
        <img src={state.avatar_url}></img>
        <p> NAME: {state.login}</p>
        <p> ID: {state.id}</p>
        <p> URL: {state.html_url}</p>    
      </div>
    </div>
    </>
  )
}

export default App
