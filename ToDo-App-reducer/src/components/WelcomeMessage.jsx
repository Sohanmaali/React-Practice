import React from "react";
import { useContext } from "react";
import todoItemsContext from "../store/ToDoItemStore";

const WelcomeMessage = () => {
  const contextObject = useContext(todoItemsContext);
  const todoItems = contextObject.todoItems;
  return (
    <>
      <div className="text-center fw-bold h1 pt-5">
        {todoItems.length == 0 && "WelCome To My ToDo App"}
      </div>
    </>
  );
};

export default WelcomeMessage;
