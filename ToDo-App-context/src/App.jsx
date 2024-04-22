import AppHead from "./components/AppHead";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import todoItemsContext from "./store/ToDoItemStore";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    let newTodoItems = {};

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

    setTodoItems((currValue) => [...currValue, newTodoItems]);
  };

  const deleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <todoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <AppHead />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems />
      </todoItemsContext.Provider>
    </>
  );
}

export default App;
