import React from "react";
import { useEffect, useState } from "react";


function TodoApp() {

    const [list, setList] = useState([]);
    
    const [taskName, setTaskName] = useState("");
    useEffect(() => {
        const getInfo = async () => {
            console.log("data accessed")
          try{
            const jsonObject = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const jsObject = await jsonObject.json();
            setList(jsObject);
          }
          catch(error){
            console.log("you got error!!!")
          }
        }
        getInfo();
          
        }, []);

       


        return (
            <>
            {console.log("1")}
                <div className="mainBody">
                    <div className="title">
                        <h2>To-do list creation</h2>
                    </div>
                    <div className="outerBox">
                        <div className="bar">
                            <input
                                className="entertask"
                                type="text"
                                placeholder="Add new task here"/>
                            {/* <input type="submit"/> */}
                            <button className="addButton">Add to list</button>
                        </div>
                    
                    
                        {list.map((lists) => (
                            <div className="bar2">
                                <div className="lists">
                                    <div className="lists2">
                                        <p>{lists.id}.  {lists.title}</p>
                                        
                                    </div>
                                    <div className="buttons">  
                                        <input type="checkbox" className="checkB" id={lists.id}/>
                                        <button>delete</button>
                                    </div>
                                </div>
                            </div>
                            
                        
                        ))}
                    </div>         
                </div>
                    
            </>
        )
    }

export default TodoApp;