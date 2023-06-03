import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({})

  useEffect(() => {
     const result = fetch('https://api.github.com/users/junuthapa011')
    .then((jsonObject) => jsonObject.json())
    .then((jsObject) => {
       setState(jsObject)})
    .catch((error) => console.log(error))
  },[])

  
 

  return (
    <>
      <div className="outer">
        <div className="main">
        <img className = "profileImage" src={state.avatar_url}></img>
          <h2>Full name: {state.name}</h2>
          <a href = "https://github.com/junuthapa011"><h3>Username: {state.login}</h3></a>
        </div>
      </div>
    </>
  )
}

export default App
