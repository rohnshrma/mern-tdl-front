// Importing the `FaTrashAlt` icon from the `react-icons` library.
// This icon will be used to represent the delete action for each task.
import { FaTrashAlt } from "react-icons/fa";

// Defining the `Task` component as a functional component.
// This component receives `props` as a parameter, which contains data and functions related to a specific task.
const Task = (props) => {
  // Returning JSX to define the structure of an individual task.
  return (
    // Main container for the `Task` component, styled using the "task" CSS class.
    <div className="task">
      {/* Displaying the name/title of the task using the `name` prop. */}
      <h4>{props.name}</h4>

      {/* Displaying the task's status (e.g., "DONE ✅" or "Pending❓") using the `status` prop. */}
      <p>Status: {props.status}</p>

      {/* Button for deleting the task. 
          The button contains an onClick event handler that calls the `onDelete` function.
          When clicked, it deletes the task with the ID provided in the `id` prop. */}
      <button onClick={() => props.onDelete(props.id)}>
        {/* Rendering the `FaTrashAlt` icon inside the button to visually represent the delete action. */}
        <FaTrashAlt />
      </button>
    </div>
  );
};

// Exporting the `Task` component so it can be imported and used in other
