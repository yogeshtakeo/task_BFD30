import React, {useState, useEffect} from 'react'

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
      <Profiles/>
      <h2>{profile.login}</h2>
          {profile.id}
          <img src={profile.avatar_url} alt="Image" width="100px" height="200px"/>
          
          </div>
          
    </>
  )
 
  
}

export default Profiles