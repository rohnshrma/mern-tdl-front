import { useState } from "react";

const CreateArea = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const nameChangeHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const descChangeHandler = (e) => {
    console.log(e.target.value);
    setDesc(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // make an object using both name & desc
    const taskObj = {
      name,
      desc,
    };

    console.log(taskObj);
  };

  return (
    <form className="createarea" onSubmit={submitHandler}>
      <div className="form-group">
        <input
          onChange={nameChangeHandler}
          type="text"
          placeholder="Task Name..."
        />
      </div>
      <div className="form-group">
        <input
          onChange={descChangeHandler}
          type="text"
          placeholder="Task Description..."
        />
      </div>
      <button>Add Task</button>
    </form>
  );
};

export default CreateArea;
