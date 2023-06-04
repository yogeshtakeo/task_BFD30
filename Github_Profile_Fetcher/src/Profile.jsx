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
            <div className="cat_des">this is cat description</div>
            <div className="authority">
              <div className="authority_pic">
                <img src={state.avatar} />
              </div>
              <h5>{state.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
