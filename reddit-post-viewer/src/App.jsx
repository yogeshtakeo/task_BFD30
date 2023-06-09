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
      <div className="header"><h2>Task 13: Popular Reddit Posts Viewer</h2></div>
      
        
      
        {post?.data?.children?.map((lists) => (
         <>
          <div className="bar">
            <div className="data">
              <p className="display"><b>{i++}.&nbsp;Title:&nbsp;</b>{lists.data.title}</p>
              <p className="display"><b>Author:&nbsp; </b>{lists.data.author}</p>
              <a className="display" href={lists.data.url}>View post</a>
            </div>
            <div className="image"> 
              image goes here
            </div>
          </div>
          
          </>  
 
        ))}  
      
    </>
  )
}

export default App