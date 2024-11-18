import { useReducer, useState } from "react";

// Initial state for the reducer
const initialState = {
  count: 0, // The initial value of the counter is set to 0
};

// Reducer function to manage state transitions
const countReducer = (currentState, action) => {
  // This function determines how the state should change based on the given action.

  // Check if the action type is "INCREMENT"
  if (action.type === "INCREMENT") {
    // If "INCREMENT", increase the count by 1
    return {
      count: currentState.count + 1, // Return the updated state
    };
  }

  // Check if the action type is "DECREMENT"
  if (action.type === "DECREMENT") {
    // If "DECREMENT", decrease the count by 1
    return {
      count: currentState.count - 1, // Return the updated state
    };
  }

  // Check if the action type is "INCREASE"
  if (action.type === "INCREASE") {
    // If "INCREASE", add the payload value to the count
    return {
      count: currentState.count + action.payload, // 'payload' is the extra data provided with the action
    };
  }

  // If none of the above actions match, reset to the initial state
  return initialState;
};

// The Counter component
const Counter = () => {
  // Using the useReducer hook to manage state with the countReducer function and initialState
  const [state, dispatch] = useReducer(countReducer, initialState);

  // Function to handle the increment action
  const handleClick = () => {
    // Dispatching the "INCREMENT" action to the reducer
    dispatch({ type: "INCREMENT" });
  };

  // Function to handle the decrement action
  const handleDecrementClick = () => {
    // Dispatching the "DECREMENT" action to the reducer
    dispatch({ type: "DECREMENT" });
  };

  // Function to handle the increase action with a payload
  const handleIncreaseClick = () => {
    // Dispatching the "INCREASE" action with a payload of 50
    dispatch({ type: "INCREASE", payload: 50 });
  };

  // JSX structure for rendering the component
  return (
    <div className="counter">
      {/* Display the current count */}
      <h2>{state.count}</h2>
      {/* Button to increment the count */}
      <button onClick={handleClick}>Increment</button>
      {/* Button to decrement the count */}
      <button onClick={handleDecrementClick}>Decrement</button>
      {/* Button to increase the count by 50 */}
      <button onClick={handleIncreaseClick}>Increase by 50</button>
    </div>
  );
};

// Export the Counter component so it can be used in other parts of the app
export default Counter;
