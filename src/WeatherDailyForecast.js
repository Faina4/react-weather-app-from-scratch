import React from "react";
import "./WeatherDailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDailyForecast(){
    return (
        <div className="WeatherDailyForecast mx-1">
        <div className="row">
        <div className="col">
           Monday
           <WeatherIcon    />
           19 10
        </div>
       
        </div>
        </div>
    )
}