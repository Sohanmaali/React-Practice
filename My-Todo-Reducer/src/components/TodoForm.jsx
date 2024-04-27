import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useRef } from "react";

function TodoForm() {
  const { todos, dispatcher } = useContext(TodoContext);
  const context = useContext(TodoContext);
  const todoTextElement = useRef();
  // console.log(todos);

  const add = (e) => {
    e.preventDefault();
    dispatcher({
      type: "ADD_ITEM",
      payload: {
        id: Date.now().toString(),
        todoText: todoTextElement.current.value,
      },
    });

    todoTextElement.current.value = ""; // Clear input after adding todo
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        // value={todos.todoText}
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
