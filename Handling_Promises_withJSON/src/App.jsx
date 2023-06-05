import React, { useState } from 'react'
import './App.css'

function App() {
  const fetchData = fetch('https://api.github.com/users/jharanatmg')
  console.log(fetchData)

  fetchData
  .then((response) =>
    response.json()
  )
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log("This is an Error", error)
  })

  const fetchWrongdata = fetch('https://api.github.com/users/wrongdata')

  console.log(fetchWrongdata)
  fetchWrongdata
  fetchData
  .then((response) =>
    response.json()
  )
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log("There is Error from wrong data fetched: ", error)
  })

  return (
    <>
     <h1>Handling Promises</h1>
    </>
  )
}

export default App
