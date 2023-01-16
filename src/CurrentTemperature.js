import React,{useState} from "react";
import "./CurrentTemperature.css";
//import { useState } from "react";

export default function CurrentTemperature(props){
    const[unit, setUnit]=useState("celsius");
    

 function showCelsius(event){
    event.preventDefault();
   setUnit("celsius")   
     } 


    function showFarehrenheit(event){
        event.preventDefault();
        setUnit("farehrenheit")
        //((props.celsius * 9) / 5 + 32);
        
    }
if (unit==="celsius"){
      return (      
        
    <span className="CurrentTemperature "> 
             <span className="temperature "> {Math.round(props.celsius)} </span>
            <span className="units"> 
            <a href="/" >°C</a>  | <a href="/" onClick={showFarehrenheit}>°F </a></span>   
    </span>
         
    );
}else{
    let farehrenheit=(props.celsius * 9) / 5 + 32;
    return ( <span className="CurrentTemperature "> 
    <span className="temperature "> {Math.round(farehrenheit)} </span>
   <span className="units"> 
   <a href="/" onClick={showCelsius}>°C</a>  | <a href="/" >°F </a></span>   
</span>)
}

   
  
}