import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  let addValue = () => {
    setCount(++counter);
  };

  let removeValue = () => {
    if (counter > 0) {
      setCount(--counter);
    }
    setCount(0);
  };

  return (
    <>
      <h1>My Counter Project</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
