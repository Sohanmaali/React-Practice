import AppHead from "./components/AppHead";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
function App() {
  const todoItems1 = [];
  let [todoItems, setTodoItems] = useState(todoItems1);
  const handleNewItem = (itemName = "No Name", itemDate = "No Date") => {
    console.log(`${itemName}    ${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <AppHead />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} />
    </>
  );
}

export default App;
