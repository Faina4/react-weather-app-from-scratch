import React from "react";
import "./WeatherIcon.css";
import ReactAnimatedWeather from  "react-animated-weather";

export default function WeatherIcon(props){
    return (    <span className="WeatherIcon">

   
  <ReactAnimatedWeather
    icon='CLEAR_DAY'
    color="goldenrod"
    size={52}
    animate={true}
  />
    </span>
   )
}
   
    
 