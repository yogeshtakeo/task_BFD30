import React from "react";
import { useEffect, useState } from "react";

function TodoApp() {
  const [task, setTask] = useState([]);

  const [newTask, setnewTask] = useState("");

  useEffect(() => {
    const Result = async () => {
      try {
        const jsonObject = await fetch(
          "https://jsonplaceholder.typicode.com/todos/?_limit=3"
        );
        const jsObject = await jsonObject.json();
        setTask(jsObject);
      } catch (error) {
        console.log("Try Again", error);
      }
    };

    Result();
  }, []);

  const addTask = () => {
    console.log(newTask);
    const taskName = {
      id: task.length + 1,
      title: newTask,
      completed: false,
    };
    const previousData = [...task, taskName];
    setTask(previousData);
    setnewTask("");
  };
  const deleteTask = (id) => {
    const newList = task.slice(0, 3).filter((item) => item.id !== id);
    setTask(newList);
  };

  return (
    <>
      <div className="card">
        <h1>To Do List </h1>

        <p id="address">
          13 Hercules Buildings <br />
          Lambeth, United Kingdom
          <br />
        </p>

        <p id="quote">
          "You're braver than you believe, and stronger than you seem, and
          smarter than you think. Keep your face to the sunshine and you cannot
          see a shadow. In every day, there are 1,440 minutes. That means we
          have 1,440 daily opportunities to make a positive impact."
        </p>

        <div className="container">
          <input
            className="listTask"
            type="text"
            value={newTask}
            onChange={(e) => setnewTask(e.target.value)}
            placeholder="Add to the list"
          />
          <button className="addButton" onClick={addTask}>
            ADD
          </button>
        </div>

        {task.map((list) => (
          <div className="lists" key={list.id}>
            <ul>
              <li>{list.id}</li>
              <li>{list.title}</li>

              <div className="check">
                <li>
                  <input
                    className="checkMark"
                    type="checkbox"
                    onClick={list.completed}
                    onChange={(e) => setnewTask(e.target.value)}
                  />
                </li>
              </div>

              <div className="cross">
                <button className="crossOut" onClick={deleteTask}>
                  x
                </button>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoApp;
