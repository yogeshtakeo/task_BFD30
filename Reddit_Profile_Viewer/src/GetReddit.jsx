import React from "react";
import { useEffect, useState } from "react";
import "./app.css";

function GetReddit() {
  const [state, setState] = useState({});

  useEffect(() => {
    const getRedditData = async () => {
      try {
        const jsonObject = await fetch("https://www.reddit.com/r/popular.json");
        const jsObject = await jsonObject.json();
        setState(jsObject);
        console.log(jsObject);
        // console.log(jsObject.data.children[0].data.title);
      } catch (error) {
        console.log("this is error", error);
      }
    };

    getRedditData();
  }, []);

  // if my variable is not null/undefined and if myy state has a value

  return (
    <>
      {/* the ? operator is optional chaining operator which check the codition for object if its undefined nor null */}
      <div className="wrapper">
        {state?.data?.children?.map((posts) => (
          <div
            className="main"
            key={posts.data.id}
            onClick={() => {
              window.location.href = posts.data.url;
            }}>
            <div className="card">
              <h4>Topics: {posts.data.subreddit}</h4>
              <h3>{posts.data.title}</h3>
              <div className="picture">
                <img src={posts.data.thumbnail} />
              </div>
            </div>
          </div>
        ))}

        {/* {state.data.children.map((item) => ()
          <div className="card">
            <div/>
          item.data.title;
        })} */}
      </div>
      {/* <div>
        {state.data.children.map((child, index) => (
          <div key={index}>
            <h1>{child.data.title}</h1>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default GetReddit;
