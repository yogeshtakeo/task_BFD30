import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItemID, setEditItemID] = useState(null);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const tasks = { id: list.length + 1, title: newTask, completed: false };
    setList([...list, tasks]);
    console.log(setList);
    setNewTask("");
  };
  const deleteTask = (id) => {
    const newArray = list.filter((items) => items.id !== id);
    setList(newArray);
  };

  const editTask = () => {
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
    );
    setList(updatedCheckedList);
  };

  return (
    <div class="max-w-sm bg-white border rounded border-bluevrounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-column justify-center align-center mt-10">
      <img
        class="rounded-t-lg"
        src="https://previews.123rf.com/images/nialowwa/nialowwa2107/nialowwa210704863/171388336-writing-displaying-text-to-do-list-business-concept-a-list-of-tasks-to-complete-and-organize.jpg"
        alt="to-do-list"
      />

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create Your To-Do-List
        </h5>

        <h4 className="text-teal-600 h4 mb-2">
          "Success only comes to those who dare to attempt.”
        </h4>

        <div className="input text-black bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 mb-3 mb-3 mt-5  ml-2 w-80 flex justify-center">
          <input
            className=" input text-sm placeholder: rounded-md shadow-md w-80 h-9 pl-2 mr-2"
            type="text"
            placeholder="Add new task here"
            value={newTask}
            onChange={handleChange}
          />
          <button
            className="border-2 text-white rounded pl-3 pr-3 w-22 h-9"
            onClick={isEditing ? editTask : addTask}
          >
            {isEditing ? <AiFillEdit size={22} /> : "Submit"}
          </button>
        </div>
        <div className="listBox relative w-80 m-2 ">
          {list?.map((lists) => (
            <ul className="lists list-none mr-auto mb-2 flex border-10 border-blue rounded-sm p-2 text-black bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 text-black">
              <li
                className="li flex justify-center items-center pl-2 text-"
                key={lists.id}
              >
                <span className="span mr-2">{lists.id}</span>
                {lists.title}
                <div className="flex justify-center w-32 h-6 right-0 absolute text-right items-center">
                  <button
                    className="button ml-8 bg-red-500"
                    onClick={() => deleteTask(lists.id)}
                  >
                    <AiOutlineClose color="white" size={25} />
                  </button>
                  <button
                    className=" bg-blue-500 ml-1"
                    onClick={() => {
                      setNewTask(lists.title);
                      setIsEditing(true);
                      setEditItemID(lists.id);
                    }}
                  >
                    <AiFillEdit color="white" size={22} />
                  </button>
                  <button
                    className=" bg-green-600 ml-1"
                    onClick={() => handleComplete(lists.id)}
                  >
                    {lists.completed ? (
                      <BiCheckboxChecked color="white" size={25} />
                    ) : (
                      <BiCheckbox color="white" size={25} />
                    )}
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
