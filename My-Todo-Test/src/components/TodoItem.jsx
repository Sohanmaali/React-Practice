import React from "react";
import { useContext } from "react";
import { todoContext } from "../context/TodoContext";
import { useState } from "react";

function TodoItem({ todo }) {
const {deleteTodo} = useContext(todoContext);
const [isTodoEditable, setIsTodoEditable] = useState(false);
  return (
    <div
      className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  "
      // bg-[#c6e9a7]"
    >
      <input
        type="text"
        className="border outline-none w-full bg-transparent rounded-lg border-black/10 px-2"
        value={todo.todoText}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
       <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
       
     onClick={()=>{
      setIsTodoEditable((prev)=>!prev)}}
      >
        {isTodoEditable ? "📁" : "✏️"}
        
        {/* 📁 */}
      </button> 
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      onClick={()=>{deleteTodo(todo.id)}}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
