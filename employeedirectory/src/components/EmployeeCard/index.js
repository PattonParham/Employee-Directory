import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className = "row">
    <div className="card">

      <div className="content row">
        
          <div className= "col-4">
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          </div>
          <div className= "col-4">
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          </div>
          <div className= "col-4">
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          </div>
        
      </div>

    </div>
    </div>
  );
}

export default EmployeeCard;
