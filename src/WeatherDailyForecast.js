import React, { useState } from "react";
import "./WeatherDailyForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherDailyForecast(props){
let [loaded, setLoaded] = useState(false);
let [dailyForecastData, setDailyForecastData] = useState(null);

function handleResponse(response){
console.log(response.data)
setDailyForecastData(response.data.daily)
setLoaded(true);
}

if(loaded){
   return(
    <div className="WeatherDailyForecast mx-2">
    <div className="row">
    <div className="col OneDay">
    <div className="DailyForecast-day">  {dailyForecastData[0].dt} </div>
     <WeatherIcon  code={dailyForecastData[0].weather[0].icon} size={32} />
     <div>
     <span className="DailyForecastTemp-max"> {dailyForecastData[0].temp.max}° </span> 
      <span className="DailyForecastTemp-min">  {dailyForecastData[0].temp.min}°</span>  
     </div>
    </div>
   
    </div>
    </div>
   )
}else{
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`
//let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`
axios.get(apiUrl).then(handleResponse);
    return null;
}


}