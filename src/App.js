import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import tasksData from "./data";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Tasks tasks={tasksData} />
      <Footer />
    </div>
  );
};

export default App;
