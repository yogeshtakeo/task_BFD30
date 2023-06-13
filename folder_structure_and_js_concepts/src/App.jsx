import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const lists = ["BLOGS", "ABOUT", "MERCH", "STORE"]
  const numbers = [44, [45, 46], 47, 48, 49]
  // const double = numbers.map((numbers) => numbers *2)
  // console.log(double)
  
  // Array Destructuring, we need '[]' , getting array element out and storing in a variable.

  const [firstElement, [, secondElement], ...rest] = numbers
  console.log(firstElement)
  console.log(numbers)
  
  // Rest Parameter creates an array
   
   console.log(secondElement)

  //  Spread Parameter removes [], and pastes the element out of an array.
  
  console.log(...rest)
  
  // Object Destructuring

  const obj = {
    name: "Babisha",
    id: "100",
    
  }
  
  const{name} = obj;

  console.log(name)
  
  
  
  return (
    <>
      <h1>{}</h1>
     <div className = "main">
      <h1>Passing Map Method to render the elements off an array.</h1>
      <h2 className= "box">{double.join(',')} : Doubled Numbers</h2>
      <img src="https://img.freepik.com/premium-vector/single-one-line-drawing-programmers-developers-make-programming-language-code-front-computer-programming-code-concept-continuous-line-draw-design-graphic-vector-illustration_638785-1244.jpg?w=900" alt="main" />
     </div>
    </>
  )
}


 

export default App
