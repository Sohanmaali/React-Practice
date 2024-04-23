// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeader from "./components/Header";
import ShowTime from "./components/ShowTime";

function App() {
  return (
    <>
      <ClockHeader />
      <ShowTime />
    </>
  );
}

export default App;
