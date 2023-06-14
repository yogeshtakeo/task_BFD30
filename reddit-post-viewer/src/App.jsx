import React from "react";
import { useEffect, useState } from "react"
import './App.css'

function App() {
  let i=1
  const [post, setPost] = useState([])
  useEffect(() => {
    
    const getInfo = async () => {
      try{
        const jsonObject = await fetch('https://www.reddit.com/r/popular.json')
        const jsObject = await jsonObject.json()
        setPost(jsObject)
      }
      
      catch(error){
        console.log("you got error!!!")
      }
      
    }
    
    getInfo()
    
  },[])




  return (
    <>
      <div className="roots">
      <div className="header"><h2>Task 13: Popular Reddit Posts Viewer</h2></div>
      
        
      <div className="grid1">
        {post?.data?.children?.map((lists) => (
         <>
         
          <div className="bar">
            <div className="data">
              <div className="titlebar">
                
                  <img className="icon1" src={lists.data.all_awardings[1]?.icon_url}></img>
                
                <div>
              <p className="display"> &nbsp;&nbsp;<b>{i++}.&nbsp;{lists.data.title}</b></p>
              <p className="displayAuthor">&nbsp;&nbsp;by:&nbsp;{lists.data.author}</p>
              </div>
              </div>
              <div className="displayimg"> 
                <img className="image" src={lists.data.thumbnail}></img>
              </div>
            </div>
            
          </div>
          
          </>  
        
        ))}  
     </div> 
     </div>
    </>
  )
}

export default App