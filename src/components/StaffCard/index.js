import React from "react";
import "./style.css";



function StaffCard(props) {
  return (
    <div className="staffCard-wrapper col-sm-6 col-lg-4">
    <div className="staffCard ">
        <img alt={props.name} src={props.image} className="staffCard-img"/>
      <div className="staffCard-body">
      <h5 className="staffCard-title">{props.name}</h5>
      <p className="staffCard-text">{props.role}</p>
      </div>
    </div>
    </div>
  );
}

export default StaffCard;
