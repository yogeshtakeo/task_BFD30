import React from 'react'
import { useEffect,useState } from 'react'

const TodoList = () => {
    //useState to update list with new tasks.
    const[list, setList]=useState['']

    const handleChange=(event)=>{
        setList(e.target.value)
    }

  return (
    
    <input type="text" placeholder='Add New Tasks' onChange={handleChange}>

    </input>
  )
}

export default TodoList