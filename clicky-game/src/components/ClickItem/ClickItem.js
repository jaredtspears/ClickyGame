import React from "react";
import "./ClickItem.css";

// component variable for the click item 
const ClickItem = props =>(
    
  
    <div className="card animated rubberBand"
    role = "img"
    onClick = {() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}>
    {/* <img src ="${props.image}" alt='${props.id}'/> */}
    text
    {props.id}
    </div>
)

export default ClickItem;