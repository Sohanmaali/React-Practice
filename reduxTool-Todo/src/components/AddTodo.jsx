import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";
import { useRef } from "react";

function AddTodo() {
  const dispatch = useDispatch();
  const todoTextElement = useRef();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoTextElement.current.value));
    todoTextElement.current.value = "";
  };
  return (
    <>
      <form className="flex" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          ref={todoTextElement}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
