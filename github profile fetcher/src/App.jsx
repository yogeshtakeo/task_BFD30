import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ state, setState] = useState({});
  const [ error, setError] = useState();

  useEffect (() => {
  const profile = async () => {
    try {
    const jsonObject = await fetch('https://api.github.com/users/dinakc')
    const jsObject = await jsonObject.json()

    setState(jsObject)
  } catch(error) {
    setError('Something is wrong')
    }
}
  profile()
  }, [])


  return (
    
    <div className='main'> 
    <img className='deena' src= {state.avatar_url}></img>
    <h2>{state.login}</h2>
    <h3 className="name">Html_url: "{state.html_url}"</h3> 
    </div>
    
  )
}

export default App
