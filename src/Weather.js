import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import CurrentDate from  "./CurrentDate"
import CurrentWeekDay from  "./CurrentWeekDay"
import CurrentTemperature from  "./CurrentTemperature"
import WeatherIcon from  "./WeatherIcon"
import WeatherDailyForecast from  "./WeatherDailyForecast"
//import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Weather(props){
//const[ready, setReady]=useState(false);
const [currentForecast, setCurrentForecast] = useState({ready:false})
const[city, setCity] = useState(props.defaultCity)

function handleResponse(response){
   console.log(response.data.weather[0]);
   setCurrentForecast({
      ready:true,
      city: response.data.name, 
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt*1000),
       })
     // setReady(true);
     //onSubmit={handleSubmit}
     //  onChange={handleCityChange}
     //<img src= {currentForecast.iconUrl} alt={currentForecast.description} className="current-icon"   />
;}
function search(){
   const apiKey="d08b5ff65675f4663f3c5d9f116c9748";
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   axios.get(apiUrl).then(handleResponse);
   //https://api.openweathermap.org/data/2.5/weather?q=London&appid=d08b5ff65675f4663f3c5d9f116c9748&units=metric
}


function handleSubmit(event){
   event.preventDefault();
   search() 
}
function handleCityChange(event){
 setCity(event.target.value)
}
if (currentForecast.ready){
   return(
      <div className="Weather">
      <ul>
        <li>  <CurrentDate date={currentForecast.date} /> </li>        
          
        </ul>  
        <div className="row current-city-search">
           <div className="col-4 p-0">
        <h1 className="my-1 p-0 mb-2">
          {currentForecast.city}
        </h1>
        <CurrentWeekDay date={currentForecast.date} />
        </div>
        <div className="col-8">
       
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-9 pe-1">
              <input type="search" placeholder="Search a city..." className="form-control" autoFocus="on" onChange={handleCityChange}
            >
              </input> 
          </div>
           <div className="col-3 ps-1">
              <input type="submit" value="Search" className="btn btn-personal w-100">
              </input>
          </div>           
          </form>
       
      
        </div>
        </div>
      
           <div className="row px-1 py-3 m-1 clearfix" >
           <div className="col-4 p-1 float-left">
            <span>
            <WeatherIcon code={currentForecast.icon}  size={82} />
    
             <CurrentTemperature celsius={currentForecast.temperature} />
                      
             </span>
           </div>
           <div className=" col-5 p-1">
          <ul className="current-forecast-description mt-3">
          <li className="text-capitalize">   Description: {currentForecast.description}   </li>
           <li>  Humidity: {currentForecast.humidity} % </li>
           <li>  Wind speed: {currentForecast.wind} km/h </li>
          </ul>
           </div>
           </div>
       <WeatherDailyForecast />
   </div>
   )} else{
     search();
    return "Loading ..."
   }
}


