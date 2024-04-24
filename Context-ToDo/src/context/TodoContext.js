import { useContext, createContext, useState } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "todo msg", complted: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
