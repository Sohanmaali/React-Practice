import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeTodo } from "../features/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {todos.map((todo) => (
          <div>
            <li key={todo.id}>
              {todo.text}
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                ❌
              </button>
            </li>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
