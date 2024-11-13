// Importing the useState hook from React to manage component state
// Importing various components from the Components folder for rendering different parts of the UI
import { useState } from "react";
import Counter from "./Components/Counter";
import CreateArea from "./Components/CreateArea";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ShowTime from "./Components/ShowTime";
import Tasks from "./Components/Tasks";

// Optional: Uncomment the following line to import an initial array of task data if needed
// import tasksData from "./data";

// Main App component definition using an arrow function
const App = () => {
  // Defining a state variable 'allTasks' to hold the list of tasks
  // 'setAllTasks' is a function to update 'allTasks'
  const [allTasks, setAllTasks] = useState([]);

  // Function to handle adding a new task to the 'allTasks' state
  // 'taskObj' is an object that contains the data of the new task being added
  const addTaskHandler = (taskObj) => {
    // Logging the new task object to the console for debugging
    console.log("Incoming Task:", taskObj);

    // Updating the 'allTasks' state using setAllTasks
    // The 'prevAllTasks' parameter represents the previous state (list of tasks) before the update
    setAllTasks((prevAllTasks) => {
      console.log("Previous Tasks:", prevAllTasks);

      // Returning a new array with 'taskObj' added at the beginning
      // '[taskObj, ...prevAllTasks]' creates a new array where 'taskObj' is first, followed by all previous tasks
      return [taskObj, ...prevAllTasks];
    });
  };

  // Function to handle deleting a task from the 'allTasks' state
  // 'deleteId' represents the unique ID of the task to be deleted
  const deleteTaskHandler = (deleteId) => {
    // Updating the 'allTasks' state by filtering out the task with the matching ID
    setAllTasks((prevAllTasks) => {
      return prevAllTasks.filter((taskObj) => {
        // Logging each task's ID and the deleteId for debugging
        console.log(taskObj.id, deleteId, taskObj.id !== deleteId);
        // Only keeping tasks whose IDs do not match deleteId
        return taskObj.id !== deleteId;
      });
    });
  };

  // Logging the current 'allTasks' state to the console to check the updated list of tasks
  console.log("Current Tasks:", allTasks);

  // Returning JSX, a syntax that allows us to write HTML in JavaScript, to structure the UI of the App component
  return (
    // Wrapping the entire app in a div with the class "app" for styling purposes
    <div className="app">
      {/* Rendering the Header component at the top of the App */}
      <Header />

      {/* Rendering the CreateArea component, which allows users to create new tasks.
          Passing the 'addTaskHandler' function as a prop named 'onAdd' so that
          CreateArea can use it to add new tasks to the task list */}
      <CreateArea onAdd={addTaskHandler} />

      {/* Rendering the Tasks component, which displays the list of tasks.
          Passing the current 'allTasks' state as a prop named 'tasks' for display
          and 'deleteTaskHandler' as a prop named 'onDelete' to enable task deletion */}
      <Tasks tasks={allTasks} onDelete={deleteTaskHandler} />

      {/* Rendering the Footer component at the bottom of the App */}
      <Footer />
    </div>
  );
};

// Exporting the App component so it can be imported and used in other parts of the project
export default App;
