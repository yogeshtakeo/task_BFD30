import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function Todo() {
  //this usestate is to add new task
  const [newItem, setNewItem] = useState("");
  //array to hold all the new added task
  const [items, setItems] = useState([]);

  //function that is called when add button is clicked
  function Addtask() {
    //create unique id using uuidv
    const item = {
      id: uuidv4(),
      value: newItem,
    };
    //adding new item to the old todo list.
    setItems((oldList) => [...oldList, item]);
    //making the new item empty again
    setNewItem("");
    console.log(items);
  }

  //funtion to call to delete task
  function Deletetask(id) {
    //creating new array which contains every task except the deleted
    let newArray = items.filter((item) => item.id !== id);
    //setting the value of items with new array which does not have
    setItems(newArray);
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

      <ul>
        {items.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.value}
                <button onClick={() => Deletetask(item.id)}>Delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
