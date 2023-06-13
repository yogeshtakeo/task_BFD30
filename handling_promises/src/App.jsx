import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// correct url
function App() {
  const fetchData = fetch('https://jsonplaceholder.typicode.com/')
  console.log(fetchData)

  fetchData
  .then((response) => response.json())
  .then((data) => {console.log(data)})
  .catch((error) => {console.log('error')});


  //incorrect url 
  const fetchWrongData = fetch('https://jsonplaceholde-r.typicode.com/')
  console.log(fetchWrongData)

  fetchWrongData
  .then((response) =>response.json())
  .then((data) => {console.log(data)})
  .catch((error) => {console.log('This is an error from wrong url')})

  return (
    <>
    <h>Handling Promise</h>
      
    </>
  )
}

export default App
