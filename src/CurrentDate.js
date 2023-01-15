import React from "react";

export default function CurrentDate(props){
    console.log(props.date);
   
let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let currentMonth=months[props.date.getMonth()]
let currentDate=props.date.getDate();
let currentYear=props.date.getFullYear();


return (
    <div>
       <div>{currentMonth} {currentDate}, {currentYear}  </div>
      
    </div>
    
    
    
)
}