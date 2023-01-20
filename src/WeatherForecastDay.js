import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props){
function day(){
    let date = new Date(props.dailyData.dt*1000);
    let day = date.getDay();

    let days=[
        "Sun",  "Mon","Tue", "Wed", "Thu", "Fri", "Sat", 
    ]
    return days[day];
}


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


        <div className="DailyForecast-day">  {day()} </div>
        <WeatherIcon  code={props.dailyData.weather[0].icon} size={32} />
        <div>
        <span className="DailyForecastTemp-max"> {maxTemperature()}</span> 
         <span className="DailyForecastTemp-min">  {minTemperature()}</span>  
        </div>
</div>
    );
}