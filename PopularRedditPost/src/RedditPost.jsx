import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

function RedditPost() {
  const [state, setState] = useState({});

  useEffect(() => {
    async function redditPostInfo() {
      try {
        const data = await fetch("https://www.reddit.com/r/popular.json");
        console.log(data);
        const response = await data.json();

        console.log(response);

        setState(response);
      } catch (err) {
        console.log(err);
      }
    }
    redditPostInfo();
  }, []);

  function isImageURL(url) {
    const image = new Image();
    image.src = url;
    return image.complete && image.naturalWidth !== 0;
  }

  return (
    <>
      <div className="navbar">
        <li>
          <img
            src="https://clipart-library.com/images_k/transparent-reddit/transparent-reddit-6.png"
            height="40px"
          ></img>
        </li>
        <li>
          <input type="text" placeholder="Search Reddit..."></input>
        </li>
        <li>
          <h2>Popular Reddit Posts</h2>
        </li>
      </div>

      <div className="container">
        {state?.data?.children?.map((sub) => {
          const isValidThumbnail =
            Boolean(sub.data.thumbnail) && isImageURL(sub.data.thumbnail);
          return (
            <>
              <div
                className="main"
                key={sub?.data?.id}
                onClick={() => {
                  window.location.href = sub.data.url;
                }}
              >
                <div className="card">
                  <h5>Topics: {sub.data.subreddit}</h5>
                  <h2>{sub.data.title}</h2>
                  {isValidThumbnail && (
                    <div className="picture">
                      <img
                        src={sub.data.thumbnail}
                        height="200px"
                        width="300px"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default RedditPost;
