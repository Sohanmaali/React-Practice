import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { useReducer } from "react";
import useCounter from "./store/GetReducer";

function App() {
  const [counter, dispatch] = useCounter();

  return (
    <>
      <h1>My Counter Project</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Remove</button>
    </>
  );
}

export default App;
