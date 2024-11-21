import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cityName]);

  const submitHandler = (e) => {
    e.preventDefault();
    setCityName(city);
  };
  const changeHandler = (e) => {
    const cityInput = e.target.value;
    setCity(cityInput);
  };
  return (
    <div className="weather-box">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter City Name..."
            onChange={changeHandler}
          />
        </div>
        <button>Fetch</button>
      </form>
    </div>
  );
};

export default Weather;
