import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "9f8c6662ff524d719ec113031240203";

  const getWeatherData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  useEffect(() => {
    // Uncomment the line below if you want to fetch data on component mount
    // getWeatherData();
  }, []);

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          value={cityName}
          onChange={handleChange}
          placeholder={"Search a city..."}
        />
        <button type="button" onClick={getWeatherData}>
          Search
        </button>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : !Object.keys(weatherData).length ? (
        <p>No data available</p>
      ) : (
        <WeatherCard weatherData={weatherData} />
      )}
    </>
  );
};

export default Weather;
