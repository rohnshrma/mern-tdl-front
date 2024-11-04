import { FaTrashAlt } from "react-icons/fa";

const Task = (props) => {
  console.log(FaTrashAlt);
  return (
    <div className="task">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <button>{<FaTrashAlt />}</button>
    </div>
  );
};

export default Task;
