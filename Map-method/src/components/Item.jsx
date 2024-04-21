import React from "react";
import styles from "./Item.module.css";
let Item = ({ foodItem, bought, handleBuyButtonClicked }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <>
      <li className={`list-group-item ${bought && "active"} `}>
        {foodItem}
        <button
          className={`${styles.button} btn btn-info `}
          onClick={handleBuyButtonClicked}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
