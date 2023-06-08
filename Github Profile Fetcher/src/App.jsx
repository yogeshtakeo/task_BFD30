import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    const getGithubInfo = async () => {
      try{
        const jsonObject = await fetch("https://api.github.com/users/babisha")
        const jsObject = await jsonObject.json()

        setState(jsObject)
         } catch(error) {
      setError('You got an error, my friend!')
         }
    }

    getGithubInfo()

  }, [])


  

  return (
    <>
      <div className="wrapper">
         <div className='card'>
            <h2>GITHUB : <button onclick = {state.url}>{state.login}</button></h2>
            <img className='babisha' src={state.avatar_url}/>
            <h3>{state.login} has about {state.followers} followers. She started her coding journey in {state.location}.</h3>
        </div>
      </div>
    </>
  )
}

export default App
