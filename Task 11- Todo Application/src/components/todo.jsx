import React from "react";
import {useEffect, useState} from "react";

function TodoTask() {
    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState("");

    useEffect(() => {
        const todoInfo = async () => {
            console.log("Information accessed")
        try {
            const jsonObject = await fetch("https://jsonplaceholder.typicode.com/todos/")
            const jsObject = await jsonObject.json();
            setTodo(jsObject);
        }
        catch(error){
            console.log("There is an error!!!!")
            
        }
        }
        todoInfo();
    }, []);
    
    return (
        <>
            <div>
                <p>To Do Lists</p>
            </div>
            <input type="text" onChange={inputHandler}/>
            <li key={todo.id}></li>
        </>

    )
}

export default TodoTask;