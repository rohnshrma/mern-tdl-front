// Importing necessary functions and libraries from React
import { useReducer, useState } from "react";
// Importing the 'uuid' library to generate unique IDs for tasks
import { v4 as uuidv4 } from "uuid";

// Defining the initial state for the form
const initialState = {
  name: "", // Represents the task name, initially empty
  description: "", // Represents the task description, initially empty
};

// Reducer function to manage state changes based on the actions
const formReducer = (currentState, action) => {
  // Check if the action type is "NAME_CHANGE"
  if (action.type === "NAME_CHANGE") {
    // Update the 'name' property while keeping the 'description' unchanged
    return {
      name: action.payload, // Update the name with the action's payload
      description: currentState.description, // Keep the current description
    };
  }
  // Check if the action type is "DESCRIPTION_CHANGE"
  if (action.type === "DESCRIPTION_CHANGE") {
    // Update the 'description' property while keeping the 'name' unchanged
    return {
      name: currentState.name, // Keep the current name
      description: action.payload, // Update the description with the action's payload
    };
  }

  // If no recognized action type is provided, return the initial state
  return initialState;
};

// Defining the CreateArea component as a function
// This component handles user input and allows adding new tasks
const CreateArea = (props) => {
  // Using useReducer to manage the form's state with the formReducer and initialState
  const [formState, dispatch] = useReducer(formReducer, initialState);

  // Function to handle changes in the task name input field
  const nameChangeHandler = (e) => {
    const nameInput = e.target.value; // Get the new value of the input field

    // Dispatch an action to update the 'name' state with the new value
    dispatch({ type: "NAME_CHANGE", payload: nameInput });
  };

  // Function to handle changes in the task description input field
  const descChangeHandler = (e) => {
    const descriptionInput = e.target.value; // Get the new value of the input field

    // Dispatch an action to update the 'description' state with the new value
    dispatch({ type: "DESCRIPTION_CHANGE", payload: descriptionInput });
  };

  // Function to handle form submission (when the "Add Task" button is clicked)
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page refresh)

    // Create a task object that combines the task's name and description
    // Also generate a unique ID for the task using uuidv4
    const taskObj = {
      ...formState, // Include all form data (name and description)
      id: uuidv4(), // Add a unique ID for the task
    };

    console.log(taskObj); // Log the task object for debugging purposes

    // Call the onAdd function passed as a prop to send the task object to the parent component
    props.onAdd(taskObj);
  };

  // Returning the JSX structure for the form
  return (
    <form className="createarea" onSubmit={submitHandler}>
      {/* Input field for the task name */}
      <div className="form-group">
        <input
          onChange={nameChangeHandler} // Trigger nameChangeHandler whenever the input changes
          type="text" // Input type set to text
          placeholder="Task Name..." // Displayed placeholder text
        />
      </div>

      {/* Input field for the task description */}
      <div className="form-group">
        <input
          onChange={descChangeHandler} // Trigger descChangeHandler whenever the input changes
          type="text" // Input type set to text
          placeholder="Task Description..." // Displayed placeholder text
        />
      </div>

      {/* Submit button to add the task */}
      <button>Add Task</button>
    </form>
  );
};

// Exporting the CreateArea component for use in other parts of the app
export default CreateArea;
