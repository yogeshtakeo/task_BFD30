import React from 'react'
import image1 from "./old man.jpg";
import image2 from "./car.jpg";
import image3 from "./camera.jpg";
import image4 from "./view.jpg";


export function doublenum(number) {
    return number*2
    console.log(number)
  
}
//Array Destructuring
export const ArrDes =()=>{
    const Values=['live','Observe','Picture it','travel']
    const[firstElement,secondElement]=Values
    console.log(firstElement)
    console.log(secondElement)
    }
//Object Destructuring
    export const ObjDes =()=>{
    const Images = {
     image1: image1,
     image2: image2,
     image3: image3,
     image4: image4 
    }
const {firstElement, secondElement}=Images
console.log(firstElement)
console.log(secondElement)
}