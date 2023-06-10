import React from 'react'
import {useState } from 'react'


const TodoList = () => {
    //useState to update list with new tasks.
    const[list, setList]=useState([])
    //useState to update newTask
    const[newTask, setNewTask]=useState('')

    const handleChange=(event)=>{
        setNewTask(event.target.value)
    }

    const addTask=()=>{
        const tasks={id:list.length+1, title:newTask, completed:false}
        setList([...list, tasks])
        
        setNewTask('')
        
    }
    console.log(list)

  return (
    <>
    <input type="text" placeholder='Add New Tasks' value={newTask} onChange={handleChange}/>

     <button onClick={addTask}>Submit</button> 
     
       {list?.map((lists)=>(
       <li key={lists.id}>
        {lists.id}
        {lists.title}
        </li>))}
     
     </>
  )
}

export default TodoList