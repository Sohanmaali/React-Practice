import AppHead from "./components/AppHead";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Sohan",
      date: "25/10/2024",
    },
    {
      name: "Rohan",
      date: "25/10/2024",
    },
    {
      name: "Raj",
      date: "25/10/2024",
    },
    {
      name: "Rani",
      date: "25/10/2024",
    },
  ];
  return (
    <>
      <AppHead />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </>
  );
}

export default App;
