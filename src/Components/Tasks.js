// Importing React, which is necessary to use JSX and create components.
import React from "react";

// Importing the Task component, which will represent each individual task in the task list.
import Task from "./Task";

// Defining the `Tasks` component as a functional component.
// This component receives `props` as a parameter, which contains the tasks data and functions passed from the parent component.
const Tasks = (props) => {
  // Returning JSX to define the structure of the `Tasks` component.
  return (
    // Main container for the list of tasks, styled using the "tasks" CSS class.
    <div className="tasks">
      {/* Checking if the tasks array (`props.tasks`) exists and is not empty. */}
      {props.tasks && props.tasks.length > 0 ? (
        // Mapping over the tasks array to create a list of `Task` components.
        props.tasks.map((taskObj) => {
          // For each task object in the array, return a `Task` component.
          return (
            <Task
              // Passing the task's title to the `Task` component as a prop named `name`.
              name={taskObj.title}
              // Passing the task's completion status as a prop named `status`.
              // If `taskObj.completed` is true, display "DONE ✅"; otherwise, show "Pending❓".
              status={taskObj.completed ? "DONE ✅" : "Pending❓"}
              // Providing a unique key for each `Task` component using the task's ID.
              // React uses this key to efficiently manage and update the list.
              key={taskObj.id}
              // Passing the task's ID to the `Task` component as a prop named `id`.
              id={taskObj.id}
              // Passing the `onDelete` function (received via props) to the `Task` component.
              // This allows the `Task` component to trigger a delete action when necessary.
              onDelete={props.onDelete}
            />
          );
        })
      ) : (
        // If there are no tasks (empty array or undefined), display a message to the user.
        <h2>No Tasks Found</h2>
      )}
    </div>
  );
};

// Exporting the `Tasks` component so it can be used in other parts of the application.
export default Tasks;
