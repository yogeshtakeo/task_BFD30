import React from 'react'
import {useState } from 'react'



const TodoList = () => {
    //useState to update list with new tasks.
    const[list, setList]=useState([])
    //useState to update newTask
    const[newTask, setNewTask]=useState('')
    //eventhandler onChange
    const handleChange=(event)=>{
        setNewTask(event.target.value)
    }
    //addTask to update the list with newTask onCick
    const addTask=()=>{
        const tasks={id:list.length+1, title:newTask, completed:false}
        //merge the list with the newTask using spread operator
        setList([...list, tasks])
        //setNewTask updates state of newTask to null after the prev newTask is submited onClick
        setNewTask('')
    }
    const deleteTask=(id)=>{
        //filter() filters the id and separates the ids which are not equal to the id clicked by user to be deleted.
        const newArray=list.filter((items)=>items.id!==id)
        //updates the List with newArray which excludes the id passed to be deleted.
        setList(newArray)
    }
    const editTask=()=>{

    }
    

  return (
    <>
    <input type="text" placeholder='Add New Tasks' value={newTask} onChange={handleChange}/>

     <button onClick={addTask}>Submit</button> 
     
       {list?.map((lists)=>(
       <li key={lists.id}>
        {lists.id} 
        {lists.title}
        <button onClick={()=>deleteTask(lists.id)}>
            X
        </button>
        </li>))}
       
     
     </>
  )
}

export default TodoList