import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calValue, setCal] = useState("");

  const onButtonClick = (btnText) => {
    console.log(btnText);

    if (btnText === "C") {
      setCal("");
    } else if (btnText === "=") {
      const result = eval(calValue);
      setCal(result);
    } else {
      const newDisplayValue = calValue + btnText;
      setCal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display calValue={calValue}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
