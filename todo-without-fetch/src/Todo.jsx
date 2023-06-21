import React from 'react'
import { useState } from 'react'
import  "./App.css"

function Todo() {
  
  
    const [addTask, setAddTask] = useState("");
    const [task, setTask] = useState([]);
    const [editTask, setEditTask] = useState(false);
    const [edit, setEdit] = useState("");
  
    function Addtask(){
      console.log("add")
      const todo = {
        id: task.length+1,
        title: addTask,
        status: false,
      };
      setTask((addTask) => [...addTask, todo]);
      setAddTask("");
    } 
    function InputHandler(event) {
      setAddTask(event.target.value);
    } 
  
    function ChangeStatus(id){
      console.log("checked")
      const schange=[...task].map((todo)=>{
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      setTask(schange);
    }
  
    function deleteTask(id) {
      let newList = task.filter((todo) => todo.id !== id);
      
      setTask(newList);
    };
  
    function EditTask(id) {
      console.log("edit")
      const updatedTask = items.map((todo) =>
        todo.id === id ? { ...todo, title: addTask } : todo
      );
      setTask(updatedTask);
      setAddTask("");
      setEditTask(false);
      console.log(updatedTask);
    }
  
    return (
      <>
        <div className=" text-slate-50 flex bg-slate-500 items-center justify-center text-2xl  p-2.5 mb-0.5 hover:drop-shadow-2xl " >
          Your todo list
        </div>
        <div className="border-2 border-slate-700"></div>
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center border-b-2 ">
            <input className=" border border-amber-700 m-1 mr-6 w-60 ... "
              type="text"
              placeholder="Add New Task"
              onChange={InputHandler}
              value={addTask}/> 
            <button className="w-auto border border-slate-300 m-1 p-0 px-2 rounded-2xl bg-slate-200 hover:bg-slate-300" 
            onClick={editTask? () =>  EditTask : Addtask}>{editTask? "Update":"Add"}</button>
          </div>
          
          
            {task.map((todo)=>{
              return(
              
              <div className='flex justify-center items-center border-b-2 border-slate-200'>
                <div className="flex-none w-8" key={todo.index}> {todo.id}.</div>
                <div className="flex-initial w-64 ...">{todo.title}</div>
                <input className="mr-4 hover:bg-slate-900" 
                type="checkbox" 
                onChange={() => ChangeStatus(todo.id)} 
                checked={todo.status}
                />
                <button className="w-auto h-7 border border-slate-300 mr-2 p-0 px-2 rounded-2xl bg-slate-200 hover:bg-slate-300" 
                  onClick={()=> {
                    setAddTask(todo.title)
                    setEditTask(true)
                    setEdit(todo.id)
                  }}>edit</button>
                <button className="w-auto h-7 border border-slate-300 m-1 p-0 px-2 rounded-2xl bg-slate-200 hover:bg-slate-300" 
                  onClick={() =>deleteTask(todo.id)}>delete</button>
              </div>)})}
              </div>
             
        
                </>
    )
  }

export default Todo