import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState([])

  useEffect


  const fetchData = fetch("https://api.github.com/users/babisha")

  fetchData
  .then((response) => response.json())
  .then((json) => {
    setState(json)
  })
  .catch((error) => console.log("This is an error", error))

  return (
    <>
      <div>{state?.login}</div>
      <div>{state?.followers_url}</div>
      <img src="https://avatars.githubusercontent.com/u/23157110?v=4" alt="avatar.url" />
      
    </>
  )
}

export default App
