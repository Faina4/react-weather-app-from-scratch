import React from "react";
import "./Weather.css"
export default function Weather(){
    return(
        <div className="Weather">
           <ul>
                <li>  Current date  January, 14, 2023</li>
                <li>  Weekday&time Saturday 00:00 </li>
               
             </ul>  
             <div className="row current-city-search">
                <div className="col-4 p-0">
             <h1 className="my-1 p-0">
                Default City
             </h1>
             </div>
             <div className="col-8">
                <form className="row">
               
                <div className="col-9 pe-1">
                    <input type="search" placeholder="Search a city..." className="form-control" autoFocus="on">
                    </input> </div>
                     <div className="col-3 ps-1">
                    <input type="submit" value="Search" className="btn btn-personal w-100">
                    </input>
                    </div>
                   
                </form>
             </div>
             </div>
           
                <div className="row px-1 py-3 m-1 clearfix" >
                <div className="col-3 p-1 ">
               <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="cloudy" className="current-icon"  />
          
                <span className="temperature "> 8 </span>
                 <span className="units"> °C |°F </span> 
              
             
               
                
                </div>
                <div className=" col-6 p-1">
               <ul className="current-forecast-description mt-3">
               <li>   Description: cloudy   </li>
                <li>  Humidity:  </li>
                <li>  Wind speed:  </li>
               </ul>
                </div>
                </div>
            
        </div>
    )
}