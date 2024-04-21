import TodoItem from "./TodoItem";
import React from "react";

function TodoItems({ todoItems }) {
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem todoName={item.name} todoDate={item.date} />
      ))}
    </>
  );
}

export default TodoItems;
