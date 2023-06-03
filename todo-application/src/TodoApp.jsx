import React from "react";
import { useEffect, useState } from "react";
import todo from "./Todo.jpg";

function TodoApp() {
  //useState--> updates states in real time.
  const [task, setTask] = useState([]); //this will update task from input we fetched through API.

  const [newTask, setnewTask] = useState(""); //this will update newTask onClick by user.

  //useEffect--> perform side effects of components; in our case re-rendering of fetched data.
  useEffect(() => {
    //Async-await to handle promise.
    const getData = async () => {
      try {
        const jsonObject = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        const jsObject = await jsonObject.json();
        setTask(jsObject);
      } catch (error) {
        console.log("Error!!!!!", error);
      }
    };

    getData();
  }, []);

  //add newTask to do in the task we fetched. It will add to end of task.
  const addTask = () => {
    //we will create an object
    console.log(newTask);
    const taskName = {
      id: task.slice(0, 10).length + 1, //Slice basically allows to manipulate length of array. Syntax(.slice(0, todesiredlength i.e 3))
      title: newTask,
      completed: false,
    };
    const getolddata = [...task.slice(0, 10), taskName];
    setTask(getolddata);
    setnewTask("");
  };
  const deleteTask = (id) => {
    //the filter will check the id in newArray is not equal to the one we clicked.
    const newArray = task.slice(0, 10).filter((item) => item.id !== id); //we will create newArray will have task excluding the task we want to delete
    setTask(newArray); // updates our array onClick
  };

  return (
    <>
      <div className="outline">
        <h1>To Do lists</h1>
        <h3>Plan your day and Stay ahead!</h3>
        <div className="box">
          <input
            className="inputtask"
            type="text"
            value={newTask}
            onChange={(e) => setnewTask(e.target.value)}
            placeholder="Add new task"
          />
          <button className="btn1" onClick={addTask}>
            Add
          </button>
        </div>
        <div className="box2">
        {task.slice(0,10).map((items) => (
          <div className="Items" key={items.id}>
            <ul>
              <li>{items.id}</li>
              <li>{items.title}</li>
              <div className="check">
              <li>
                <input className="tick"
                  type="checkbox"
                  checked={items.completed}
                  onChange={(e) => setnewTask(e.target.value)}
                />
              </li>
              </div>

              <div className="cross">
                <button className="dbtn" onClick={deleteTask}>
                  X
                </button>
                
              </div>
            </ul>
            
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default TodoApp;
