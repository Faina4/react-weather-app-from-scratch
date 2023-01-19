import React from "react";
import "./WeatherDailyForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherDailyForecast(props){

function handleResponse(response){
console.log(response.data)

}

let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
//let apiKey="743bee57fddbfaf52447193a87d5dd25";
//let units = "metric";
//let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`
//let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`
//`https://api.openweathermap.org/data/3.0/onecall?` --- !!! not weather!!
axios.get(apiUrl).then(handleResponse);
//

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