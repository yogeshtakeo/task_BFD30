import React, {useState, useEffect} from 'react'


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
    <div>
      {todo.map((task) => (
        <div className='list' key={task.id}> 
        <ul>
          <li>{task.id}</li>
          <li>{task.title}</li>
        </ul>
        </div>
      ))
      }      
    </div>
  )
}

export default TodoApp