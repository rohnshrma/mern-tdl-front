// Importing the `useEffect` and `useState` hooks from React.
// `useState` allows us to add state to our functional component,
// while `useEffect` helps us manage side effects (e.g., data fetching or subscriptions).
import { useEffect, useState } from "react";

// Importing various UI components from the 'Components' folder to structure the app.
import Counter from "./Components/Counter";
import CreateArea from "./Components/CreateArea";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ShowTime from "./Components/ShowTime";
import Tasks from "./Components/Tasks";
import Weather from "./Components/Weather";

// Optional: Uncomment this line if you have a predefined array of task data to use as an initial state.
// import tasksData from "./data";

// Main `App` component defined as an arrow function.
const App = () => {
  // **State Declaration**
  // `allTasks`: Holds the list of all tasks. Initially, it is an empty array `[]`.
  // `setAllTasks`: Function to update the value of `allTasks`.
  const [allTasks, setAllTasks] = useState([]);

  // **useEffect Hook**
  // `useEffect` runs side effects in React. In this case, it fetches task data from an API when the component loads.
  useEffect(() => {
    console.log("fetching tasks");

    // An async function to fetch tasks from a public API.
    const fetchTasks = async () => {
      try {
        // Sending a GET request to fetch task data from the API.
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        // Parsing the response data to JSON format.
        const data = await response.json();

        // Updating the state (`allTasks`) with the fetched task data.
        setAllTasks(data);
      } catch (err) {
        // Handling errors (e.g., network issues) and logging them to the console.
        console.error(err);
      }
    };

    // Calling the async function to initiate the data fetch.
    fetchTasks();
  }, []); // **Dependency Array**
  // The empty array `[]` means this effect runs only once when the component mounts.

  // **Add Task Handler**
  // Function to add a new task to the list of tasks (`allTasks`).
  const addTaskHandler = (taskObj) => {
    console.log("Incoming Task:", taskObj);

    // Updating the state by adding the new task (`taskObj`) to the beginning of the array.
    setAllTasks((prevAllTasks) => {
      console.log("Previous Tasks:", prevAllTasks);
      return [taskObj, ...prevAllTasks];
    });
  };

  // **Delete Task Handler**
  // Function to delete a task based on its unique ID (`deleteId`).
  const deleteTaskHandler = (deleteId) => {
    // Using `filter` to create a new array excluding the task with the matching ID.
    setAllTasks((prevAllTasks) => {
      return prevAllTasks.filter((taskObj) => {
        console.log(taskObj.id, deleteId, taskObj.id !== deleteId);
        return taskObj.id !== deleteId;
      });
    });
  };

  // **JSX (UI Structure)**
  // Returning JSX to structure the UI of the app.
  return (
    <div className="app">
      {/* Displaying the app's header */}
      <Header />

      {/* Optionally displaying a Counter component */}
      {/* <Counter /> */}

      {/* Component for adding new tasks.
          Passing `addTaskHandler` as a prop (`onAdd`) so that this component can add tasks */}
      {/* <CreateArea onAdd={addTaskHandler} /> */}

      {/* Component for displaying tasks.
          Passing the task list (`allTasks`) and delete functionality (`deleteTaskHandler`) as props */}
      <Tasks tasks={allTasks} onDelete={deleteTaskHandler} />

      {/* Optionally displaying a Weather component */}
      {/* <Weather /> */}

      {/* Displaying the footer at the bottom */}
      <Footer />
    </div>
  );
};

// Exporting the `App` component to use it in other parts of the project.
export default App;
