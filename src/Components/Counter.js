import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const countReducer = (currentState, action) => {
  // console.log("reducer re-running", "State =>", currentState, "Action =>", action);

  if (action.type === "INCREMENT") {
    return {
      count: currentState.count + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: currentState.count - 1,
    };
  }

  if (action.type === "INCREASE") {
    return {
      count: currentState.count + action.payload,
    };
  }

  return initialState;
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementClick = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleIncreaseClick = () => {
    dispatch({ type: "INCREASE", payload: 50 });
  };
  return (
    // Returning the JSX structure to render on the screen.
    <div className="counter">
      {/* A div element with a class name of 'counter' */}
      <h2>{state.count}</h2>
      {/* Displaying the current value of 'count' inside an h2 element */}
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncreaseClick}>Increase by 50</button>
      {/* A button that, when clicked, triggers the handleClick function to increment 'count' */}
    </div>
  );
};

export default Counter;
