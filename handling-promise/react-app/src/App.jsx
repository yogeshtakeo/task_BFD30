import React, { useState } from 'react'
import './App.css'

function App() {
let state= {}

  const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(result)
  result
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {console.log("You've got error!!", error)})


return(
  <>
      <h1>handling promise</h1>
      <h2>task 9</h2>
      
  </>
)
}

export default App
