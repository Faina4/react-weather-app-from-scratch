import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
function maxTemperature(){ //Math.round max temp data and add as a function (?)
    let temperature = Math.round(props.dailyData.temp.max)
    return `${temperature}°`
}
function minTemperature(){
    let temperature = Math.round(props.dailyData.temp.min)
    return `${temperature}°`
}

    return(
<div>


        <div className="DailyForecast-day">  {props.dailyData.dt} </div>
        <WeatherIcon  code={props.dailyData.weather[0].icon} size={32} />
        <div>
        <span className="DailyForecastTemp-max"> {maxTemperature()}</span> 
         <span className="DailyForecastTemp-min">  {minTemperature()}</span>  
        </div>
</div>
    );
}