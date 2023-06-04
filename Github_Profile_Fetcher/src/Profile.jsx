import React from "react";
import { useEffect, useState } from "react";

function Profile() {
  const [state, setState] = useState({});

  //Promise handling using async await

  useEffect(() => {
    const getProfileInfo = async () => {
      const fetchObject = await fetch(
        "https://api.github.com/users/ashmaupret100"
      );
      const fetchData = await fetchObject.json();
      setState(fetchData);
      console.log(fetchData);
    };
    getProfileInfo();
  }, []);

  // Promise handling using then and catch
  // fetchData
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));
  return (
    <>
      <div className="main">
        <div className="header">
          <h2>Adopt Me !</h2>
          <p>You Laugh, I meow</p>
        </div>
        <div className="wrapper">
          <div className="cat_pic"></div>
          <div className="description">
            <div className="cat_des">
              <h3>My name: Billi</h3>
              <h4>I am 2 years old</h4>
              <p>I love to eat wet food</p>
            </div>
            <div className="authority">
              <div className="authority_pic">
                <img src={state.avatar_url} />
              </div>
              <h5>Contact : {state.name}</h5>
              <p>Followers : {state.followers}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
