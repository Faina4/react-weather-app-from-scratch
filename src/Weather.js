import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import CurrentDate from  "./CurrentDate"
import CurrentWeekDay from  "./CurrentWeekDay"



export default function Weather(props){
//const[ready, setReady]=useState(false);
const [currentForecast, setCurrentForecast] = useState({ready:false})

function handleResponse(response){
   console.log(response.data.dt*1000);
   setCurrentForecast({
      ready:true,
      cityName: response.data.name, 
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://openweathermap.org/img/wn/04d@2x.png",
      date: new Date(response.data.dt*1000),
       })
     // setReady(true);
     //onSubmit={handleSubmit}
     //  onChange={handleCityChange}
;}

if (currentForecast.ready){
   return(
      <div className="Weather">
      <ul>
        <li>  <CurrentDate date={currentForecast.date} /> </li>        
          
        </ul>  
        <div className="row current-city-search">
           <div className="col-4 p-0">
        <h1 className="my-1 p-0 mb-2">
          {currentForecast.cityName}
        </h1>
        <CurrentWeekDay date={currentForecast.date} />
        </div>
        <div className="col-8">
       
        <form className="row" >
          <div className="col-9 pe-1">
              <input type="search" placeholder="Search a city..." className="form-control" autoFocus="on"
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
           <div className="col-3 p-1 ">
          <img src= {currentForecast.iconUrl} alt={currentForecast.description} className="current-icon"  />
     
           <span className="temperature "> {Math.round(currentForecast.temperature)} </span>
            <span className="units"> °C |°F </span>         
           
           </div>
           <div className=" col-6 p-1">
          <ul className="current-forecast-description mt-3">
          <li className="text-capitalize">   Description: {currentForecast.description}   </li>
           <li>  Humidity: {currentForecast.humidity} % </li>
           <li>  Wind speed: {currentForecast.wind} km/h </li>
          </ul>
           </div>
           </div>
       
   </div>
   )} else{
      const apiKey="d08b5ff65675f4663f3c5d9f116c9748";

let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

    return "Loading ..."
   }
}


