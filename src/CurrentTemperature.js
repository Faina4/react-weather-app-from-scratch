import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props){
    return (
        
    <span className="CurrentTemperature "> 
             <span className="temperature "> {props.celsius} </span>
            <span className="units"> °C |°F </span>   
    </span>
         
    )
}