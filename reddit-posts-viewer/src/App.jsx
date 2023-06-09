import React,{ useState,useEffect } from 'react'

import './App.css'
import{GiHamburgerMenu} from 'react-icons/gi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import{BsSearch} from 'react-icons/bs'
import logo from './reddit-logo.png'
import meme from './meme.jpg'

function App() {
  //useState to update the state
  const [state, setState] = useState([])
 //useEffect to handle re-rendering
 useEffect(()=>{

  const getState= async()=>{
    try{
    const response= await fetch("https://www.reddit.com/r/popular.json?limit=5")
    const JSdata=await response.json()
    // to access the data from children we introduce a vriable children.
    const children=JSdata.data.children.map(childData=>childData.data)
    
    setState(children)
    }
    catch(error){
      console.log("Error!",error)
    }
    
  }
  getState()
   },[])
  console.log(state)
  //{state.kind}
  //{state.data.after}
  

  return (
    <>
  
  {state.kind}
  {state.map((item,index)=>(
  <div key={item.index}>
  
  
  
    
  
  
      
      <div className='outline'>
        
        <div className="nav">
          <ul className="right">
            <li><GiHamburgerMenu size={30}/></li>
            <li><button>Home <RiArrowDropDownLine size={30}/></button></li>

          </ul>
          <ul className='left'>
            <li><BsSearch size={30 }/></li>
            <li><img  className="img1" src={logo} width="50px" height="50"/></li>
          </ul>
        </div>
        <div className='page'>
        <p> {item.subreddit_name_prefixed} 22h</p>
         <h4>AI rally you say?</h4>
         <div className="meme">
          <img className="img2" src={meme} width="400px" height="300px"/>
         </div>

        </div>
        
      </div>
      </div>
  ))}
      
    </>
  )
}

export default App
