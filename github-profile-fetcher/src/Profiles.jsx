import React, { useState, useEffect } from "react";
import Model from "./Model.webp";
import {AiFillCaretRight,AiOutlineTwitter,AiFillInstagram,AiFillFacebook} from 'react-icons/ai'
import {GiPhotoCamera} from 'react-icons/gi'
const Profiles = () => {
  //useState
  const [profile, setProfile] = useState({});

  console.log("Running");
  //Async-wait
  useEffect(() => {
    const ProfileData = async () => {
      try {
        const jsonObject = await fetch(
          "https://api.github.com/users/kabinathapa"
        );
        const jsObject = await jsonObject.json();
        setProfile(jsObject);
      } catch (error) {}
    };
    ProfileData();
  }, []);

  return (
    <>
      <div className="outline">
        <div className="logo">
        <div className="div"></div>
        <div className="circle"> 
       
        <GiPhotoCamera size={80}/ >
          
        </div>
        <div className="div"></div>

        </div>
        <div className="box">
          <ul className="ul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
         
          <div className="bio">
          
          <div className="content">
           <h2>Kay John</h2>
           <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            voluptatum accusamus vel corrupti minima. Error deserunt sunt
            doloremque labore sed tenetur repudiandae tempore aliquam
            reprehenderit voluptatem, provident sit illo ducimus!</p>
            <a className="read"> Read More  <AiFillCaretRight className="icon" size={12}/></a>
            <input className="input" placeholder="Email address" type="text"/> 
            <button>Subscribe</button>
            <AiOutlineTwitter className="icon1" size={20}/>
            < AiFillInstagram className="icon1" size={20}/>
            <AiFillFacebook className="icon1" size={20}/>

          
          </div>
          <img
            className="image"
            src={Model}
            alt="Image"
            width="320px"
            height="380px"
          />
          
          </div>

          <div className="creator">
          
          <h5 >Designed By: {profile.name}</h5>
          <h5>Portfolio: {profile.html_url}</h5>
         </div>
         
        </div>
        
      </div>
    </>
  );
};

export default Profiles;
