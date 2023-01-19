import React from "react";
import "./WeatherDailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDailyForecast(){
    return (
        <div className="WeatherDailyForecast mx-1">
        <div className="row">
        <div className="col">
        <div className="DailyForecast-day">  Mon </div>
         <WeatherIcon  code={"50d"} size={32} />
         <div>
         <span className="DailyForecastTemp-max">  19° </span> 
          <span className="DailyForecastTemp-min">  10°</span>  
         </div>
        </div>
       
        </div>
        </div>
    )
}