import React, { useEffect, useState } from "react";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
// import axios from "axios";
import Button from "@mui/material/Button";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import WindPowerOutlinedIcon from "@mui/icons-material/WindPowerOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import wetCard from "./wetCard";
import "./wet.css";
const Wet = () => {
  useEffect(()=>{
    document.title="Weather App"
  })
  const [Data, setData] = useState("Karachi");
  const [TempInfo, setTemp] = useState({});
  const Add = async () => {
    var res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${Data}&appid=6c10e0c49023c6818b3a17ed9f8e5794`
    );
    let ata = await res.json();

    const { temp, humidity, pressure, feels_like } = ata.main;
    const { main: weatherMood } = ata.weather[0];
    const { name } = ata;
    const { speed } = ata.wind;
    const { deg } = ata.wind;

    // console.log(temp, humidity, pressure, feels_like, deg,name,speed);
    const info = {
      temp,
      humidity,
      pressure,
      feels_like,
      weatherMood,
      name,
      speed,
      deg,
    };
    setTemp(info);
    setData("");
  };



  return (
    <div className="qweather">
      <div>
        <div className="qnav">
          <div className="qlogo">
            <h2 className="qwet_h2">weather App</h2>
          </div>
          <div className="qsearch">
            <input
              className="qwet_input"
              type="text"
              value={Data}
              onChange={(e) => {
                setData(e.target.value);
              }}
              placeholder="Enter City"
            />
            <Button type="button" onClick={Add}>
              <SearchIcon />
            </Button>
          </div>
        </div>

        <div>
          <div className="qmid">
            <h1 className="qcity">{TempInfo.name}</h1>

            <h2 className="qhw">Temperature:{TempInfo.temp} ℉</h2>
            <h2 className="qhw">Feels Like: {TempInfo.feels_like} ℉</h2>
            <h2 className="qhw">
              Humidity:{TempInfo.humidity} <StormOutlinedIcon />
            </h2>
            <h2 className="qhw">
              Weather: {TempInfo.weatherMood} <CloudOutlinedIcon />
            </h2>
            <h2 className="qhw">
              Wind-Speed:{TempInfo.speed} <AirOutlinedIcon />
            </h2>
            <h2 className="qhw">
              Wind-Degree:{TempInfo.deg} <WindPowerOutlinedIcon />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wet;
