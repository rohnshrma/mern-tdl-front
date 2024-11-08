// Importing React, which is necessary for using JSX and creating components
import React from "react";

// Importing the Task component, which will represent each individual task
import Task from "./Task";

// Defining the Tasks component, which receives props as a parameter
const Tasks = (props) => {
  // Returning JSX for the component
  return (
    // Main container div for the Tasks component, with a class name of "tasks"
    <div className="tasks">
      {/* Checking if there are tasks in the props. If props.tasks exists and is not empty, map over it */}
      {props.tasks ? (
        // Using the map function to go through each task object in the tasks array
        props.tasks.map((taskObj) => {
          // Returning a Task component for each task in the array
          return (
            <Task
              // Passing the task's name to the Task component as a prop
              name={taskObj.name}
              // Passing the task's description to the Task component as a prop
              desc={taskObj.desc}
              // Using a unique key for each Task component for React to manage the list efficiently
              key={taskObj.id}
              // Passing the task's id to the Task component as a prop
              id={taskObj.id}
            />
          );
        })
      ) : (
        // If props.tasks is empty or undefined, display a message indicating no tasks were found
        <h2>No Tasks Found</h2>
      )}
    </div>
  );
};

// Exporting the Tasks component so it can be imported and used in other files
export default Tasks;
