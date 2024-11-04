import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return (
    <div className="tasks">
      {props.tasks ? (
        props.tasks.map((taskObj) => {
          return (
            <Task
              name={taskObj.name}
              description={taskObj.description}
              key={taskObj.id}
              id={taskObj.id}
            />
          );
        })
      ) : (
        <h2>No Tasks Found</h2>
      )}
    </div>
  );
};

export default Tasks;
