import React, {useState, useEffect} from 'react'
import Model from "./Model.webp"

const Profiles = () => {
   //useState
   const [profile, setProfile]=useState({})
   
   console.log("Running")
     //Async-wait
     useEffect(()=>{
       const ProfileData = async () => {
       try{
         const jsonObject = await fetch('https://api.github.com/users/kabinathapa')
         const jsObject = await jsonObject.json()
         setProfile(jsObject)
         
       }
       catch(error){
         
       }
 
     }
     ProfileData()
   },[])

   return (
    <>
    <div className="outline">
      <div className="box">
        <ul className='ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Photographs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <img className="image" src={Model} alt="Image" width="300px" height="400px"/>
      </div>
      
          
          </div>
          
    </>
  )
 
  
}

export default Profiles