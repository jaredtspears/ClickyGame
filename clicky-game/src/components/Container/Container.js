import React from "react";
import "./Container.css";

// creating container for the props and children
const Container = props =>(
    <container className= "container">
    {props.children}
    </container>
)

export default Container;