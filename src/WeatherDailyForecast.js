import React, { useState } from "react";
import "./WeatherDailyForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherDailyForecast(props){
let [loaded, setLoaded] = useState(false);
let [dailyForecast, setdailyForecast] = useState(null);

function handleResponse(response){
console.log(response.data.list)
setLoaded(true);
}

if(loaded){
   return(
    <div className="WeatherDailyForecast mx-2">
    <div className="row">
    <div className="col OneDay">
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
}else{
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`
axios.get(apiUrl).then(handleResponse);
    return null;
}


}