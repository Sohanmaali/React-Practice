import { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    // return todos;
    case "DELETE_ITEM":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// useEffect(() => {}, []);

// Define TodoContextProvider component
export const TodoContextProvider = ({ children }) => {
  const [todos, dispatcher] = useReducer(todoReducer, []);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length != 0) {
      dispatcher({ type: "ADD_ITEM", payload: storedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos, todoReducer, dispatcher }}>
      {children}
    </TodoContext.Provider>
  );
};
