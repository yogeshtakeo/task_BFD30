import React from "react";
import { useEffect, useState } from "react"

function App() {
  
  const [post, setPost] = useState([])
  let dispObj
  console.log("1")
  useEffect(() => {
    
    const getInfo = async () => {
      try{
        const jsonObject = await fetch('https://www.reddit.com/r/popular.json')
        const jsObject = await jsonObject.json()
        setPost(jsObject)
        

        return dispObj
      }
      
      catch(error){
        console.log("you got error!!!")
      }
      console.log("1.5")
    }
    console.log("2")
    getInfo()
    console.log("2.5")
  },[])




  return (
    <>
      {console.log("3")}
      {post?.data?.children?.map((lists) => (
        <div>
          <p>{lists.data.title}</p>
          <p> by: {lists.data.author}</p>
          </div>
      ))}  
    </>
  )
}

export default App