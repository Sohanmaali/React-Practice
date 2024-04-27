import { useReducer } from "react";

const reducer = (counter, action) => {
  if (action.type === "INCREMENT") if (counter <= 10) return ++counter;
  if (action.type === "DECREMENT") {
      if (counter > 0) {
          return --counter;
        }
    }
    return counter;
};

const useCounter = () => {
  return useReducer(reducer, 0);
};
export default useCounter;
