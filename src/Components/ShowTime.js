import { useState } from "react";

const ShowTime = () => {
  const [time, setTime] = useState("Time");

  const clickHandler = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(clickHandler, 1000);

  return (
    <div className="showtime">
      <h2>{time}</h2>
      {/* <button onClick={clickHandler}>Show Time</button> */}
    </div>
  );
};

export default ShowTime;
