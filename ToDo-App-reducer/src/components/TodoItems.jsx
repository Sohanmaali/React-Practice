import TodoItem from "./TodoItem";
import todoItemsContext from "../store/ToDoItemStore";
import { useContext } from "react";

function TodoItems() {
  const { todoItems } = useContext(todoItemsContext);
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.date} />
      ))}
    </>
  );
}

export default TodoItems;
