import React from "react";
import "./Weather.css"
export default function Weather(){
    return(
        <div className="Weather">
           <ul>
                <li>  Current date  January, 14, 2023</li>
                <li>  Weekday&time Saturday 00:00 </li>
               
             </ul>  
            
             <h1>
                Default City
             </h1>
             
             <ul>
                <div className="row">
                <div className="col-6">
             <li>  
                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="cloudy">
                </img> Temperature: 5C
             </li>
                <li>  Description: </li>
                
                </div>
                <div className="col-6">
                <li>  Humidity:  </li>
                <li>  Wind speed:  </li>
                </div>
                </div>
             </ul>
        </div>
    )
}