import React from "react";
import "./Container.css";

// creating container for the props and children
const Container = props =>(
    <div className= "container-fluid">
        <div className= "row">
            {/* <div className = "col-sm;"> */}
                {props.children}
            {/* </div> */}
        </div>
    </div>
)

export default Container;