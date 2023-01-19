import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    return(
<div>


        <div className="DailyForecast-day">  {props.dailyData.dt} </div>
        <WeatherIcon  code={props.dailyData.weather[0].icon} size={32} />
        <div>
        <span className="DailyForecastTemp-max"> {props.dailyData.temp.max}° </span> 
         <span className="DailyForecastTemp-min">  {props.dailyData.temp.min}°</span>  
        </div>
</div>
    );
}