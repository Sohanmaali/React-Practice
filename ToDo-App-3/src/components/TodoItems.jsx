import TodoItem from "./TodoItem";
import React from "react";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
}

export default TodoItems;
