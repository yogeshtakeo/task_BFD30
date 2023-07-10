import React from "react";
import { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState([]);
  //const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const getResult = async () => {
      console.log("success");
      try {
        const jsonObject = await fetch(
          "https://jsonplaceholder.typicode.com/todos/?_limit=7"
        );
        console.log(jsonObject);
        const jsObject = await jsonObject.json();
        setTask(jsObject);
      } catch (error) {
        console.log("An error");
      }
    };
    getResult();
  }, []);

  return (
    <div className="main">
      <div className="header">
        {" "}
        To do application
        <input
          className="entertask"
          type="text"
          placeholder="Add new task here"
        />
        <button>Add</button>
      </div>
      <div className="todolistss">
        {task.map((alltask) => (
          <div className="tasks" key={alltask.id}>
            <ul>
              <li>{alltask.id}.</li>
              <li>{alltask.title}</li>
              <li>
                <div className="tick">
                  <input type="checkbox" />
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
