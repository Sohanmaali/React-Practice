import { createContext } from "react";

const todoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);

export default todoItemsContext;
