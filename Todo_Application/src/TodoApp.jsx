import React from "react";
import { useState, useEffect } from "react";

function TodoApp() {
  const [todo, setTodo] = useState([]);
  // const todoList = fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(todoList);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonObject = await fetch(
          "https://jsonplaceholder.typicode.com/todos/?_limit=10"
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

  return <h1>this is return from to do app</h1>;
}
export default TodoApp;
