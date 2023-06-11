import React from "react";
import { useState } from "react";

const TodoList = () => {
  //useState to update the list with new tasks.
  const [list, setList] = useState([]);
  //useState to update the newTask
  const [newTask, setNewTask] = useState("");
  //useState to update the isEditing
  const [isEditing, setIsEditing] = useState(false);
  //useState to update the editItemID
  const [editItemID, setEditItemID] = useState(null);

  //eventhandler onChange
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  //addTask to update the list with newTask onCick
  const addTask = () => {
    const tasks = { id: list.length + 1, title: newTask, completed: false };
    //merge the list with the newTask using spread operator
    setList([...list, tasks]);
    console.log(setList);
    //setNewTask updates state of newTask to null after the prev newTask is submited onClick.
    setNewTask("");
  };
  const deleteTask = (id) => {
    //filter() filters the id and separates the ids which are not equal to the id clicked by user to be deleted.
    const newArray = list.filter((items) => items.id !== id);
    //updates the List with newArray which excludes the id passed to be deleted.
    setList(newArray);
  };

  const editTask = () => {
    //map function will map each elements in array and if the id user chose to update is equal to the task id then it will update the tiltle of task.
    const updatedArray = list.map((items) =>
      items.id === editItemID ? { ...items, title: newTask } : items
    );
    setList(updatedArray);
    setNewTask("");
    setIsEditing(false);
    setEditItemID(null);
    console.log(updatedArray);
  };
  const handleComplete = (id) => {
    const updatedCheckedList = list.map((items) =>
      items.id === id ? { ...items, completed: !items.completed } : items
    ); //maps each elements of the lists, checks the id, and if ids are equal then it will set completed:false to completed:true.
    setList(updatedCheckedList);
  };

  return (
    <>
      <div className="outline flex flex-col items-center justify-center h-auto w-96 m-2 p-2 bg-slate-600">
        <div className="input bg-purple-400 p-1">
          <input
            className="text-sm placeholder:italic border rounded-sm w-64 p-1 pl-2"
            type="text"
            placeholder="Add New Tasks"
            value={newTask}
            onChange={handleChange}
          />
          <button
            className="border p-1 rounded-md pl-4 pr-4 bg-slate-400"
            onClick={isEditing ? editTask : addTask}
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
        <div className="listBox bg-green-300 w-80 m-2">
        {list?.map((lists) => (
          <ul className="lists list-none mr-auto mb-1">
          <li key={lists.id}>
            {lists.id}
            {lists.title}
            <button onClick={() => deleteTask(lists.id)}>X</button>
            <button
              onClick={() => {
                setNewTask(lists.title);
                setIsEditing(true);
                setEditItemID(lists.id);
              }}
            >
              update
            </button>
            <button onClick={() => handleComplete(lists.id)}>
              {lists.completed ? "Completed" : "Incompleted"}
            </button>
          </li>
          </ul>
        ))}
      </div>
      </div>
    </>
  );
};

export default TodoList;
