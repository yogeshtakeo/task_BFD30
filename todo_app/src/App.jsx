import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({})
  const [newState, setNewState] = useState('')

    useEffect(() => {
      fetchData()
    }, []) 

    async function fetchData() =>  {
      const jsonObj = await fetch('https://jsonplaceholder.typicode.com/todos/')
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
