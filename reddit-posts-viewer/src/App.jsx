import React,{ useState,useEffect } from 'react'

import './App.css'
import{GiHamburgerMenu} from 'react-icons/gi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import{BsSearch} from 'react-icons/bs'
import{BiUpvote,BiDownvote,BiComment,BiShare} from 'react-icons/bi'
import logo from './reddit-logo.png'
import meme from './meme.jpg'

function App() {
  //useState to update the state
  const [state, setState] = useState([])
 //useEffect to handle re-rendering
 useEffect(()=>{

  const getState= async()=>{
    try{
    const response= await fetch("https://www.reddit.com/r/popular.json?limit=2")
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
        {state.map((item)=>(
        <div key={item}>
        <p> {item.subreddit_name_prefixed}</p>
         <h4>{item.title}</h4>
         <div className="meme">
         <img className="img2" src={item.url} />
         </div>
         <div className="reactions">
          <ul>
            <li><BiUpvote size={20}/>{item.ups} </li>
            <li><BiDownvote size={20}/>{item.downs}</li>
            <li><BiComment size={20}/>{item.num_comments}</li>
            <li><BiShare size={20}/> {item.num_crossposts}</li>
          </ul>
         </div>
         </div>
  ))}
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
