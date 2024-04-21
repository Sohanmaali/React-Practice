import { useState } from "react";

function App() {
  let [color, setColor] = useState("red");
  return (
    <>
      <div className="full-screen" style={{ backgroundColor: color }}>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          type="button"
          className="btn m-2 bg-info"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("olive")}
        >
          Olive
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          style={{ backgroundColor: "gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => setColor("Purple")}
        >
          Purple
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          style={{ backgroundColor: "lavender", color: "black" }}
          onClick={() => setColor("lavender")}
        >
          Lavender
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          style={{ backgroundColor: "white", color: "black" }}
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => setColor("Black")}
        >
          Black
        </button>
      </div>
    </>
  );
}

export default App;
