import React, {useState, useEffect} from 'react'
import './App.css'

function TodoApp() {
    const [state, setState] = useState([])

    useEffect(() => {
      const getData = async() => {
        try{
          const jsonObj = await fetch("https://jsonplaceholder.typicode.com/todos/")
          const jsObj = await jsonObj.json()
          setState(jsObj)
          console.log(jsObj)
        }
        catch(error){
          console.log("There is an error", error)
        }
      }
    getData()
    }, [])
  
  return (
    <div className='card'>
      <div className='container'>
      <input className='bar' type='text' placeholder= '  Add new tasks'/> 
      <button>Add</button>    
      </div>
      {state.map((task) => (
        <div className='list' key={task.id}> 
       
        <ul>
          <li>{task.id}</li>
          <li>{task.title}</li>
          
          <li> <div className='check'>
                    
                <input type="checkbox" />
                  <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"></link>
                  <i class="material-icons">delete</i>
           </div> </li>    
         
        </ul>
        </div>
      ))
      }      
    </div>
  )
}

export default TodoApp