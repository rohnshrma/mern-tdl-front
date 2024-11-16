// Importing the useState function from React, which helps us manage and update component data (state)
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Defining the CreateArea component as a function
// This component will allow the user to input and submit a new task
const CreateArea = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const nameChangeHandler = (e) => {
    const nameInput = e.target.value;
    setFormData((prevFormData) => {
      return {
        name: nameInput,
        description: prevFormData.description,
      };
    });
  };

  const descChangeHandler = (e) => {
    const descriptionInput = e.target.value;
    setFormData((prevFormData) => {
      return {
        name: prevFormData.name,
        description: descriptionInput,
      };
    });
  };

  // Defining a function to handle the form submission (when the user clicks "Add Task")
  const submitHandler = (e) => {
    // Preventing the page from refreshing when the form is submitted
    e.preventDefault();

    // Creating an object that combines the task's name and description
    const taskObj = {
      ...formData,
      id: uuidv4(),
    };

    // Logging the task object to the console for debugging
    console.log(taskObj);

    // Passing the new task object to a function received through props (from the parent component)
    // This will allow the parent component to use the new task data
    props.onAdd(taskObj);
  };

  // Returning the form layout (JSX) that will be displayed on the page
  return (
    // Form element with a class name "createarea" for styling, and an onSubmit event for handling submission
    <form className="createarea" onSubmit={submitHandler}>
      {/* First input field for the task name */}
      <div className="form-group">
        <input
          onChange={nameChangeHandler} // This calls nameChangeHandler whenever the input changes
          type="text" // Input type is text
          placeholder="Task Name..." // Placeholder text for the input field
        />
      </div>

      {/* Second input field for the task description */}
      <div className="form-group">
        <input
          onChange={descChangeHandler} // This calls descChangeHandler whenever the input changes
          type="text" // Input type is text
          placeholder="Task Description..." // Placeholder text for the input field
        />
      </div>

      {/* Button to submit the form and add the new task */}
      <button>Add Task</button>
    </form>
  );
};

// Exporting the CreateArea component so it can be used in other parts of the app
export default CreateArea;
