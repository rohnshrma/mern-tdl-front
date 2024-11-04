// Importing the FaTrashAlt icon from the react-icons library
import { FaTrashAlt } from "react-icons/fa";

// Defining the Task component, which receives props as a parameter
const Task = (props) => {
  // Logging the FaTrashAlt icon component to the console (for debugging purposes)
  console.log(FaTrashAlt);

  // Returning JSX to define the structure of the Task component
  return (
    // Main container div for the Task component, with a class name of "task"
    <div className="task">
      {/* Displaying the name of the task using the name prop */}
      <h4>{props.name}</h4>

      {/* Displaying the description of the task using the description prop */}
      <p>{props.description}</p>

      {/* Displaying a button with a trash icon (FaTrashAlt) inside it */}
      <button>
        {/* Rendering the FaTrashAlt icon component, which represents a trash/delete icon */}
        {<FaTrashAlt />}
      </button>
    </div>
  );
};

// Exporting the Task component so it can be imported and used in other files
export default Task;
