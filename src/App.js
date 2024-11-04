// Importing the Footer component from the Components folder
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";

// Importing the Header component from the Components folder
import Header from "./Components/Header";

// Importing the Tasks component from the Components folder
import Tasks from "./Components/Tasks";

// Importing tasksData, which is an array of task data, from the data file
import tasksData from "./data";

// Defining the main App component as an arrow function
const App = () => {
  // Returning JSX (a syntax extension for writing HTML within JavaScript)
  return (
    // Main container div for the App component, with a class name of "app"
    <div className="app">
      {/* Rendering the Header component */}
      <Header />

      {/* Rendering the Tasks component and passing the tasksData as a prop */}
      {/* <Tasks tasks={tasksData} /> */}

      <Counter />

      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
};

// Exporting the App component so it can be imported and used in other files
export default App;
