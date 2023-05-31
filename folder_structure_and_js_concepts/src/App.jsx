import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const lists = ["BLOGS", "ABOUT", "MERCH", "STORE"]

  return (
    <>
    
    <div className="header">
      <h1>CALL ME BY YOUR NAME !</h1>
      <h2><button href="#">{lists[0]}</button></h2>
      <h2><button href="#">{lists[1]}</button></h2>
      <h2><button href="#">{lists[2]}</button></h2>
      <h2><button href="#">{lists[3]}</button></h2>

      
    </div>
    <div className="box">
        
      <img src="https://i.pinimg.com/originals/ca/df/c3/cadfc3ab6e317c4bb868ec3fe6b8f4ef.jpg" alt="logo" />

    </div>
     <div className="footer">
      MADE WITH LOVE COPYRIGHT 2023
      </div> 

    </>
  )
}


 

export default App
