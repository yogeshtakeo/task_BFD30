import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let allTodos = [
    {
      id: 1,
      todo_title: "learn to cook",
      is_completed: "True",
    },
    {
      id: 2,
      todo_title: "learn to dance",
      is_completed: "False",
    },
    {
      id: 3,
      todo_title: "learn to play guitar",
      is_completed: "False",
    },
    {
      id: 4,
      todo_title: "learn to play flute ",
      is_completed: "True",
    },
  ];
  function Addtask() {}
  console.log(allTodos[0].todo_title);
  return (
    <>
      <h1>Todo Application</h1>
      <input type="text" placeholder="Enter the task" />
      <button className="button" onClick={Addtask}>
        Add Task
      </button>
      <div>
        <div>
          {allTodos.map((each_todo) => (
            <div key={each_todo.id}>
              <li>{each_todo.todo_title}</li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
