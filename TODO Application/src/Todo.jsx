import React from "react"
import { useEffect, useState } from "react";
import './App.css'

function TodoApp(){

  // Using useState function to update and store the variable's value
    const[todoList3, setTodoList3]=useState([]);
    const[todoList4, setTodoList4]=useState([]);
    
  //fetching the data from jsonplaceholder and handling the promise using async await function
  //using useEffect function to control the infinite rerender process caused by useState 

    useEffect(() => {
      const getData3 = async () => {
       try{
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/?_limit=3")
        const jsonObject= await data.json()
      console.log(jsonObject)
      setTodoList3(jsonObject)
    }
    catch(error){
      console.log("Error! Error! Error!")
    }
  }
  getData3()
  },[])

  //fetching the data from jsonplaceholder and handling the promise using async await function
  //using useEffect function to control the infinite rerender process caused by useState 

  useEffect(() => {
    const getData4 = async () => {
     try{
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/?_limit=4")
      const jsonObject= await data.json()
    console.log(jsonObject)
    setTodoList4(jsonObject)
  }
  catch(error){
    console.log("Error! Error! Error!")
  }
}
getData4()
},[])

  
  return(
    <>

    {/* adding header element to the browser */}
    <div className="head">
      <header><h2>Task Organizer</h2></header>
    </div>  
      
      <nav className="mainNav">
        <ul>
          <a href="index.html"><li>Home</li></a>
          <a href="index.html"><li>NewTask</li></a>
          <a href="index.html"><li>CompletedTasks</li></a>
          <a href="index.html"><li>PendingTasks</li></a>
        
      <a href="index.html"><li>Login</li></a>
        </ul>
      </nav>
    
    

    <div className="main">

      <div className="title">
        <h3>Current Tasks</h3>
      </div>
      {todoList3.map((list)=>(
        <div className="content">
          <button id = "button">
            <input type="checkbox"></input>
          </button>
          {list.title}
          <button className="delete">
            delete
          </button>
      </div>

        
        ))
      }
      
      {todoList4.map((lists)=>(
        <div className="content">
          <button id = "button">
            <input type="checkbox"></input>
          </button>
          {lists.title}
          <button className="delete">
            delete
          </button>
        </div>

      
        ))
      }
    <img src = "https://i.pinimg.com/736x/eb/bc/11/ebbc11e0a46dc414b0b7ca71680c5359.jpg"></img>

    </div> 
  
    </>
  )
}

export default TodoApp