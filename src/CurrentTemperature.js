import React,{useState} from "react";
import "./CurrentTemperature.css";
//import { useState } from "react";

export default function CurrentTemperature(props){
    const[temperature, setTemperature]=useState(props.celsius)
   
    function showCelsius(event){
        event.preventDefault();
        setTemperature(props.temperature)
    } 
    function showFarehrenheit(event){
        event.preventDefault();
        setTemperature(Math.round((props.temperature * 9) / 5 + 32));
    }
    return (      
        
    <span className="CurrentTemperature "> 
             <span className="temperature "> {temperature} </span>
            <span className="units"> 
            <a href="/" onClick={showCelsius}>°C</a>  | <a href="/" onClick={showFarehrenheit}>°F </a></span>   
    </span>
         
    );
}