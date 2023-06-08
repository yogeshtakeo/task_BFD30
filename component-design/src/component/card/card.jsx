import React, { useEffect, useState } from "react";
import styles from './card.module.css'

function Card() {
    const [state, setState] = useState({});
 
  useEffect(() => {
  const getGithubInfo = async () => {
    try{
      const jsonObject = await fetch('https://api.github.com/users/yogeshtakeo');
      const jsObject = await jsonObject.json();
    setState(jsObject);
    }
    catch(error){
      console.log("you got error!!!")
    }
  }
    getGithubInfo();

  }, [])

  const moreInfo = function(){
    
  }

    return (
        <>
            <div className={styles.background}>
                <img className={styles.pic} src = {state.avatar_url}/>
                <p className={styles.name}>Name: "{state.name}"</p>
                <p className={styles.name}>ID: "{state.id}"</p>
                <p className={styles.name}>Login ID: "{state.login}"</p>
                <p className={styles.name}>Location: "{state.location}"</p>
                <p className={styles.name}>Created: "{state.created_at}"</p>
                <p className={styles.name}>Last Active: "{state.updated_at}"</p>
                
            </div>
        </>
    )
}

export default Card