import AppHead from "./components/AppHead";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import todoItemsContext from "./store/ToDoItemStore";
import TodoItemsContextProvider from "./store/ToDoItemStore";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <AppHead />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems />
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
