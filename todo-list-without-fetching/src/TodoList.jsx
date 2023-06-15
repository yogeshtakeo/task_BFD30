import React from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

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
     <div className="Box w-96 h-96 flex flex-col justify-center items-center m-8 rounded-lg
                   border-orange-500 border-2 bg-gradient-to-l from-slate-100 to-orange-400
                    md:flex flex-row">
        <h1 className=" h1 mb-1 text-black text-lg">ToDo Lists</h1>
        <h4 className="h4 mb-2">Start getting things done...</h4>
        <div className="input mb-3 w-80 flex justify-center">
          <input
          className=" input text-sm placeholder:italic rounded-md shadow-md shadow-orange-500 w-80 h-9 pl-2 mr-2"
            type="text"
            placeholder="Add New Tasks"
            value={newTask}
            onChange={handleChange}
          />
          <button
           className="border-orange-500 border-2 shadow-md shadow-white text-white rounded-xl pl-3 pr-3 w-22 h-9 bg-orange-500"
            onClick={isEditing ? editTask : addTask}
          >
             {isEditing ? <AiFillEdit size={22} /> : "Submit"}
          </button>
        </div>
        <div className="listBox relative w-80 m-2">
          {list?.map((lists) => (
            <ul className="lists list-none mr-auto mb-2 flex border-2 border-orange-600 rounded-md ">
              <li
                className="li flex justify-center items-center pl-2 text-"
                key={lists.id}
              >
                <span className="span mr-2">{lists.id})</span>
                {lists.title}
                <div className="f  flex justify-center w-32 h-6 right-0 absolute text-right items-center ">
                  <button
                    className="button ml-8 bg-orange-600"
                    onClick={() => deleteTask(lists.id)}
                  >
                    <MdCancel color="white" size={22} />
                  </button>
                  <button
                    className=" bg-orange-600 ml-1"
                    onClick={() => {
                      setNewTask(lists.title);
                      setIsEditing(true);
                      setEditItemID(lists.id);
                    }}
                  >
                    <AiFillEdit color="white" size={22} />
                  </button>
                  <button
                    className=" bg-orange-600 ml-1"
                    onClick={() => handleComplete(lists.id)}
                  >
                    {lists.completed ? (
                      <BiCheckboxChecked color="white" size={22} />
                    ) : (
                      <BiCheckbox color="white" size={22} />
                    )}
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
