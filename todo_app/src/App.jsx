import React, { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({})
  const [newState, setNewState] = useState('')

    useEffect(() => {
      handleAddState()
    }, []) 

    async function fetchData() =>  {
      let jsonObj = await fetch('https://jsonplaceholder.typicode.com/todos/')
      jsonObj .then(
        const jsObj = await jsonObj.json()
        setState(jsObj)
      )
      .catch((error) => console.log("Error fetching", error))
    }
    
    const handleAddState = () => {
      const newStateObj = {
        id: state.length + 1, 
        title: newState,
        completed: false,
        console.log(newStateObj)
      }
    }
    setState([...tasks, newStateObj])
    setNewState('')

  return (
    <>
      <div className='box'> 
      Displaying items
     
      </div>
    </>
  )
}

export default App
