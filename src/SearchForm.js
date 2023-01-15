import React from "react";
import "./Weather.css";

export default function SearchForm (){
    return(
        <form className="row">
          
        <div className="col-9 pe-1">
            <input type="search" placeholder="Search a city..." className="form-control" autoFocus="on">
            </input> 
        </div>
         <div className="col-3 ps-1">
            <input type="submit" value="Search" className="btn btn-personal w-100">
            </input>
        </div>
           
        </form>
    )
}