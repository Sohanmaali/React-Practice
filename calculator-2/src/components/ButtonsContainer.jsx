import styles from "./ButtonsContainer.module.css";
import React from "react";

let ButtonsContainer = ({ onButtonClick }) => {
  const btnlist = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {btnlist.map((btnName) => (
          <button
            className={styles.button}
            onClick={() => onButtonClick(btnName)}
          >
            {btnName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
