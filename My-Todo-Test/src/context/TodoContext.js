import { useContext } from "react";
import { createContext } from "react";
import useReducer from "react";
export const todoContext = createContext({
  todos: [{ id: "1", todoText: "hello" }],

  addTodo: () => {},

  deleteTodo: () => {},
});

export const useTodoContext = () => {
  return useContext(todoContext);
};

export const TodoContextProvider = todoContext.Provider;

