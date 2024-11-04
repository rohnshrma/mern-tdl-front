import { useState } from "react";
// Importing the useState hook from React.
// useState is a function that lets us add state to a functional component.

const Counter = () => {
  // Defining a functional component called Counter.
  console.log("Counter Running");
  // Logs "Counter Running" to the console each time this component re-renders.

  var [count, setCount] = useState(0);
  // Using the useState hook to declare a state variable named 'count' and a function 'setCount' to update it.
  // The initial value of 'count' is set to 0.

  const handleClick = () => {
    // Defining a function named handleClick to handle button clicks.
    setCount((count += 1));
    // Updating the 'count'state by incrementing it by 1 using the 'setCount' function.
    // The use of `count += 1` in setCount is unconventional and not recommended; `setCount(count + 1)` is preferred.
    console.log(count);
    // Logs the updated count to the console.
  };

  return (
    // Returning the JSX structure to render on the screen.
    <div className="counter">
      {/* A div element with a class name of 'counter' */}
      <h2>{count}</h2>
      {/* Displaying the current value of 'count' inside an h2 element */}
      <button onClick={handleClick}>Increment</button>
      {/* A button that, when clicked, triggers the handleClick function to increment 'count' */}
    </div>
  );
};

export default Counter;
// Exporting the Counter component so it can be imported and used in other parts of the application.
