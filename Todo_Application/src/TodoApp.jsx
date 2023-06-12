import React from "react";
import { useState, useEffect } from "react";

function TodoApp() {
  //this useState is for displaying up todo list
  const [todo, setTodo] = useState([]);
  // const todoList = fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(todoList);

  //This usestate is for adding the task
  // const [addTask, setAddTask] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonObject = await fetch(
          "https://jsonplaceholder.typicode.com/todos/?_limit=7"
        );
        console.log(jsonObject);
        const jsObject = await jsonObject.json();
        setTodo(jsObject);
        console.log(jsObject);
      } catch (error) {
        console.log("This is error", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="main">
        <h1>To Do Lists </h1>

        <button className="button">ADD</button>
        <div className="todolist">
          {todo.map((tasks) => (
            <div className="tasks" key={tasks.id}>
              <ul>
                <li>{tasks.id}.</li>
                <li>{tasks.title}</li>
                <li>
                  <input type="checkbox" id="check" />
                  <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"></link>
                  <i class="material-icons">delete</i>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TodoApp;
