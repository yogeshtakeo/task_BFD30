import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({})

  const result = fetch('https://api.github.com/users/junuthapa011')
    .then((jsonObject) => jsonObject.json())
    .then((jsObject) => {
       setState(jsObject)})
    .catch((error) => console.log(error))

  return (
    <>
      <div className="outer">
        <div className="main">
        <img className = "profileImage" src={state.avatar_url}></img>
          <h2>Full name: {state.name}</h2>
          <h3>Username: {state.login}</h3>
        </div>
      </div>
    </>
  )
}

export default App
