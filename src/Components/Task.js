// Importing the FaTrashAlt icon from the react-icons library
import { FaTrashAlt } from "react-icons/fa";

// Defining the Task component, which receives props as a parameter
const Task = (props) => {
  // Returning JSX to define the structure of the Task component
  return (
    // Main container div for the Task component, with a class name of "task"
    <div className="task">
      {/* Displaying the name of the task using the name prop */}
      <h4>{props.name}</h4>

      {/* Displaying the description of the task using the description prop */}
      <p>{props.desc}</p>

      {/* Displaying a button with a trash icon (FaTrashAlt) inside it */}
      <button
        // Attaching an onClick event to the button that calls the onDelete function from props
        // When clicked, it triggers the delete action for the task with the given ID
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        {/* Rendering the FaTrashAlt icon component, which represents a trash/delete icon */}
        {<FaTrashAlt />}
      </button>
    </div>
  );
};

// Exporting the Task component so it can be imported and used in other files
export default Task;
