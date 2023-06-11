import React from 'react'
import {useState } from 'react'



const TodoList = () => {
    //useState to update the list with new tasks.
    const[list, setList]=useState([])
    //useState to update the newTask
    const[newTask, setNewTask]=useState('')
    //useState to update the isEditing
    const[isEditing, setIsEditing]=useState(false)
    //useState to update the editItemID
    const[editItemID, setEditItemID]=useState(null)
    
  //eventhandler onChange
    const handleChange=(event)=>{
        setNewTask(event.target.value)
    }
    //addTask to update the list with newTask onCick
    const addTask=()=>{
        const tasks={id:list.length+1, title:newTask, completed:false}
        //merge the list with the newTask using spread operator
        setList([...list, tasks])
        console.log(setList)
        //setNewTask updates state of newTask to null after the prev newTask is submited onClick.
        setNewTask('')
    }
    const deleteTask=(id)=>{
        //filter() filters the id and separates the ids which are not equal to the id clicked by user to be deleted.
        const newArray=list.filter((items)=>items.id!==id)
        //updates the List with newArray which excludes the id passed to be deleted.
        setList(newArray)
    }
    
    const editTask=()=>{
      //map function will map each elements in array and if the id user chose to update is equal to the task id then it will update the tiltle of task.
       const updatedArray= list.map((items)=>
       items.id===editItemID?{ ...items,title: newTask }: items )
       setList(updatedArray)
       setNewTask('')
       setIsEditing(false)
       setEditItemID(null)
       console.log(updatedArray)
    }
    const handleComplete=(id)=>{
      const updatedCheckedList=list.map((items)=>
      items.id===id ? {...items, completed:!items.completed}:items)//maps each elements of the lists, checks the id, and if ids are equal then it will set completed:false to completed:true.
      setList(updatedCheckedList)
      

    }
  
    

  return (
    <>
    <input type="text" placeholder='Add New Tasks' value={newTask} onChange={handleChange}/>

     <button onClick={isEditing ? editTask : addTask}>
       {isEditing? 'Update' : 'Submit'}</button> 
     
       {list?.map((lists)=>(
       <li key={lists.id}>
        {lists.id} 
        {lists.title}
        <button onClick={()=>deleteTask(lists.id)}>
            X
        </button>
        <button onClick={()=> {
          setNewTask(lists.title)
          setIsEditing(true)
          setEditItemID(lists.id)}} >update</button>
          <button onClick={()=>handleComplete(lists.id)}>
            {lists.completed ?'Completed':'Incompleted'}
          </button>
        </li>
        
        ))}
       
     
     </>
  )
}

export default TodoList