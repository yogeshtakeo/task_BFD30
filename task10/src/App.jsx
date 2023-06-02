import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({})

  const result = fetch("https://api.github.com/users/junuthapa011")
    .then((jsonObject) => jsonObject.json())
    .then((jsObject) => { setState(jsObject)})
    .catch((error) => console.log(error))

  return (
    <>
      <img src={state.avatar_url}></img>
      <h2>{state.login}</h2>
    </>
  )
}

export default App
