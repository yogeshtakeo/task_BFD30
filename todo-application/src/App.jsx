import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//useState implementation for updating state of task and error.
  const[task, setTask]=useState({})
  const[error, setError]=useState('')
//functional Component
  const TodoApp = () => {
    //Useeffect to handle the re-rendering
    useEffect(()=>{
    const addTask= async ()=>{
      //handling the promise using async-await and trycatch.
      try{
        const jsonObject = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const jsObject= await jsonObject.json()
        setTask(jsObject)
      }
      catch (error) {
        setError('Something went wrong!')
        
        
      }
   }
    TodoApp()
  },[])

  }
  return (
    <>
      {error ? (
        <h1>{error}</h1>
        ):
        (<div className="outline">
          <button>Task</button>
          <h1>{task.userId}</h1>
        </div>)
      }
    </>
  )
}

export default App
