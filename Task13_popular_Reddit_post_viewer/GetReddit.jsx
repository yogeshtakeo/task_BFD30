import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { BiComment, BiShare } from "react-icons/bi";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import logo from "/Users/namsy/task_BFD30/Task13_popular_Reddit_post_viewer/src/Reddit-Logomark-White-Dark-Background-Logo.wine.svg";
import "./src/App.css";

function GetReddit() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const getState = async () => {
      try {
        const response = await fetch(
          "https://www.reddit.com/r/popular.json?limit=3"
        );
        const JSdata = await response.json();
        const children = JSdata.data.children.map(
          (childData) => childData.data
        );

        setState(children);
      } catch (error) {
        console.log("Error!", error);
      }
    };
    getState();
  }, []);
  console.log(state);

  return (
    <>
      <div className="container">
        <div className="head">
          <ul className="top">
            <li>
              <img
                className="logo"
                src={logo}
                width="50px"
                height="50"
                margin="4px"
              />
            </li>
            <li>
              <h2>Top Three Reddit Posts of The Day</h2>
            </li>
            <li className="search">
              <BsSearch size={30} />
            </li>
          </ul>
        </div>
        <div className="page">
          {state.map((item) => (
            <div key={item}>
              <p> {item.subreddit_name_prefixed}</p>
              <h4>{item.title}</h4>
              <div className="innerbox">
                <img className="img2" src={item.url} />
              </div>
              <div className="response">
                <ul>
                  <li>
                    <HiThumbUp size={20} />
                    {item.ups}
                  </li>
                  <li>
                    <HiThumbDown size={20} />
                    {item.downs}
                  </li>
                  <li>
                    <BiComment size={20} />
                    {item.num_comments}
                  </li>
                  <li>
                    <BiShare size={20} /> {item.num_crossposts}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetReddit;
