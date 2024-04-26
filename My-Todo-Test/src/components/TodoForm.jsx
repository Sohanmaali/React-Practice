import React from "react";
import { useContext } from "react";
import { todoContext } from "../context/TodoContext";
import { useState } from "react";
import { useRef } from "react";

function TodoForm() {
  const { addTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");

  const todoTextElement = useRef();
  
  const add = (e) => {
    e.preventDefault();

    addTodo(todoTextElement.current.value);
    todoTextElement.current.value ="";
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo.todoText}
        ref={todoTextElement}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
