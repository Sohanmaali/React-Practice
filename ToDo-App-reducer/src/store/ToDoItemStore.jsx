import { createContext, useReducer } from "react";

export const todoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);
const todoItemsReducer = (currentTodoItem, action) => {
  let newTodoItems;
  const itemName = action.payload.itemName;
  const itemDate = action.payload.itemDate;
  if (action.type === "NEW_ITEM") {
    newTodoItems = currentTodoItem;
    if (itemName === "" && itemDate === "") {
      newTodoItems = { name: "No Name", date: "No Date" };
    } else if (itemName === "" || itemDate === "") {
      if (itemName === "") {
        newTodoItems = { name: "No Name", date: itemDate };
      } else if (itemDate === "") {
        newTodoItems = { name: itemName, date: "No Date" };
      }
    } else {
      newTodoItems = { name: itemName, date: itemDate };
    }
  } else if (action.type === "DELETE_ITEM") {
    const newTodoItems = currentTodoItem.filter(
      (item) => item.name !== itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  let [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(newItemAction);
  };
};
export default TodoItemsContextProvider;
