import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className = "row">
    <div className="card">

      <div className="content row">
        
          <div className= "col-4">
          
            <strong>Name:</strong> {props.name}
        
          </div>
          <div className= "col-4">
         
            <strong>Occupation:</strong> {props.occupation}
        
          </div>
          <div className= "col-4">
        
            <strong>Location:</strong> {props.location}
        
          </div>
        
      </div>

    </div>
    </div>
  );
}

export default EmployeeCard;
