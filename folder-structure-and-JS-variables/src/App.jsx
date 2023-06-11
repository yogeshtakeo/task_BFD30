import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {doublenum,ArrDes,ObjDes} from "./double.jsx";

function App() {
  //Declarations of array numbers and implementation of map method to double the array
  const Arraynums = [1, 2, 3, 4]
  const result = Arraynums.map(doublenum)
  console.log(result);
  //Array Destructuring
  ArrDes()
  
  //Object Destructuring
  ObjDes()


//Rest Parameters
function sumof(...numbers){
  let sum=0
  for(let i=0;i<numbers.length;i++){
  sum=sum+numbers[i]}
  return sum
}
const output= sumof(2,4,1)
console.log(output)

//Spread Operators
//combining to one
const array1=[1,2,3]
const array2=[3,2,1]
const combinedarray=[...array1,...array2]
console.log(combinedarray)
 //Clone to new array
 const arr1clone=[...array1]
 const arr2clone=[...array2]
 console.log(array1)
 console.log(array2)
  return <>
  <h1>Vision</h1>
  <div className="outline">
   
  </div>
  </>;
}

export default App;
