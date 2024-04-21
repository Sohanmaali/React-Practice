import Myheader from "./components/Myheader";
import ItemList from "./components/ItemList";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [food, setFootItem] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...food, newFoodItem];
      // console.log(newFoodItem);
      setFootItem(newItems);
    }
  };
  return (
    <>
      <Container>
        <Myheader />
        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <ErrorMessage foodItem={food} />
        <ItemList foodItem={food} />
      </Container>
    </>
  );
}

export default App;
