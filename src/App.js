// Importing the Counter component from the Components folder
import Counter from "./Components/Counter";

// Importing the CreateArea component from the Components folder
import CreateArea from "./Components/CreateArea";

// Importing the Footer component from the Components folder
import Footer from "./Components/Footer";

// Importing the Header component from the Components folder
import Header from "./Components/Header";

// Importing the ShowTime component from the Components folder
import ShowTime from "./Components/ShowTime";

// Importing the Tasks component from the Components folder
import Tasks from "./Components/Tasks";

// Importing tasksData, which is an array of task data, from the data file
import tasksData from "./data";

// Defining the main App component as an arrow function
const App = () => {
  // Defining addTaskHandler function to handle adding a new task
  // The function accepts a parameter 'taskObj' which represents the new task object
  const addTaskHandler = (taskObj) => {
    // Logging the incoming task data to the console for debugging or monitoring
    console.log("Incoming Data =>", taskObj);
  };

  // Returning JSX (JavaScript XML), a syntax for writing HTML in JavaScript, to define the UI of the App component
  return (
    // Main container div for the App component, with a class name of "app" for styling purposes
    <div className="app">
      {/* Rendering the Header component at the top of the App */}
      <Header />

      {/* Rendering the Tasks component and passing the tasksData array as a prop */}
      {/* The Tasks component will use tasksData to display each task */}
      {/* <Tasks tasks={tasksData} /> */}

      {/* Rendering the CreateArea component and passing addTaskHandler as a prop called 'onAdd' */}
      {/* This will allow CreateArea to trigger addTaskHandler when a new task is created */}
      <CreateArea onAdd={addTaskHandler} />

      {/* Rendering the Footer component at the bottom of the App */}
      <Footer />
    </div>
  );
};

// Exporting the App component to make it available for import in other files
export default App;
