import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ state, setState] = useState({})

  const number = fetch('https://api.github.com/users/dinakc')
  .then((jsonObject) => jsonObject.json())
  .then((jsObject)=> {
   setState(jsObject)
  })
  .catch((error) => console.log(error))




  return (
    <>
    <div>{state.login}</div>
    <img  className='deena' src='https://avatars.githubusercontent.com/u/105759959?v=4' alt='deena picture'></img>
      
    </>
  )
}

export default App
