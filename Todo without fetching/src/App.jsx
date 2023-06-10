import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import arrayElements from './TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Learning Fetching",
    isCompleted: "Yes"
  },
  {
    id: 2,
    title: "Learning Interpolation",
    isCompleted: "Yes"
  },
  {
    id: 3,
    title: "Learning Template Literal",
    isCompleted: "No"
  },
  {
    id: 4,
    title: "Practicing ternary operators",
    isCompleted: "Not yet"
  },
  ]);


  useEffect(()=>{
  setTodos([...todos,{ id :5 , title:"Yogesh is dumb", isCompleted:"No"}])
 
  },[])

  console.log(todos)

  const todoList = todos.map(arrayElements);
  return (
    <>
     <div>{todoList}</div>
    </>
  )
}

export default App
