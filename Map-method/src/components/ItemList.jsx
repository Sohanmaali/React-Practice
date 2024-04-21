import { useState } from "react";
import Item from "./Item";
const ItemList = (props) => {
  let [activeItems, setActiveItem] = useState([]);

  let onBuyButton = (item, event) => {
    let newActive = [...activeItems, item];
    setActiveItem(newActive);
  };
  return (
    <>
      <ul className="list-group">
        {props.foodItem.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handleBuyButtonClicked={() => onBuyButton(item, event)}
            bought={activeItems.includes(item)}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
