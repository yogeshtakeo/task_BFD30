import './App.css'
import { useState } from 'react'

function App() {
  const [state, setState] = useState({})

  const profile = fetch('https://api.github.com/users/jharanatmg')

  profile
  .then((response) => {
    const jsonPromise = response.json()
    .then((jsPromise) => {
      setState(jsPromise)
    })
  })
  .catch((error) => console.log("Error", error))

  return (
    <>
    <div className='box'> 
      <div className='card'>
        <img src={state.avatar_url}></img>
      <p> Name: {state.login}</p>
      <p> User: {state.id}</p>

      </div>
    </div>
    </>
  )
}

export default App
