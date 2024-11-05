const ShowTime = () => {
  var time = new Date().toLocaleTimeString();

  const clickHandler = () => {
    time = new Date().toLocaleTimeString();
    console.log(time);
  };
  return (
    <div className="showtime">
      <h2>{time}</h2>
      <button onClick={clickHandler}>Show Time</button>
    </div>
  );
};

export default ShowTime;
