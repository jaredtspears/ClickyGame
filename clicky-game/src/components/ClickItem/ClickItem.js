import React from "react";
import "./ClickItem.css";

// component variable for the click item 
const ClickItem = props =>(
    
  
    <div className="card animated rubberBand"
    role = "img"
    onClick = {() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}>
    {props.id}
    </div>
)

export default ClickItem;