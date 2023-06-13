import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ state, setState] = useState({})

  useEffect (() => {
    const profile = fetch('https://api.github.com/users/dinakc')

  profile
  .then((response) => {
    const jsonPromise= response.json()
  .then((jsPromise)=> {
   setState(jsPromise)
  })
  console.log('first')
})
  .catch((error) => console.log('This is error', error))
  }, [])


  return (
    <>
    <div className='name'>{state.login}</div>
    <img  className='deena' src='https://avatars.githubusercontent.com/u/105759959?v=4' alt='deena picture'></img>
      
    </>
  )
}

export default App
