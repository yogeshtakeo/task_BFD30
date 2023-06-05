import React from "react";
import { useEffect, useState } from "react";


function TodoApp() {

    const [newTask, setNewTask] = useState([]);
    
    const [taskName, setTaskName] = useState("");
    useEffect(() => {
        const getInfo = async () => {
            console.log("data accessed")
          try{
            const jsonObject = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const jsObject = await jsonObject.json();
            setNewTask(jsObject);
          }
          catch(error){
            console.log("you got error!!!")
          }
        }
        getInfo();
          
        }, []);

        const addNewTask= () => {

            const newTask = {
                id: newTask.length+1,
                title: taskName,
                completed: false,
                date: new Date().toTimeString().split(" ")[0],
            };
            
        };


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
                            <button className="addButton" onClick={addNewTask}>Add to list</button>
                        </div>
                    
                    
                        {newTask.map((list) => (
                            <div className="bar2">
                                <div className="lists">
                                    <div className="lists2">
                                        <p>{list.id}.  {list.title}</p>
                                    </div>
                                    <div className="buttons">    
                                        <input type="checkbox" id={list.id}/>
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