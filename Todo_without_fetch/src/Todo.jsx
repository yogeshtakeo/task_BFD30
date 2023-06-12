import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  //this usestate is to add new task
  const [newItem, setNewItem] = useState("");
  //array to hold all the new added task
  const [items, setItems] = useState([]);
  //function that is called when add button is clicked
  function Addtask() {
    const item = {
      id = uuidv4();
    };
  }

  return (
    <>
      <h1>Todo Application</h1>
      <input
        type="text"
        placeholder="Enter the task"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="button" onClick={Addtask}>
        Add Task
      </button>
      <div>
        <ul>
          <li>cook </li>
        </ul>
      </div>
    </>
  );
}

export default Todo;
