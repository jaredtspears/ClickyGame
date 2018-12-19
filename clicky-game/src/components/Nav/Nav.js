
import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for Nav Bar: 
// using props here will push to Game.js
const Nav = props => (
<div>
    <nav className="jumbotron jumbotron-fluid bg-dark">
   <div className="display-4">Dragon Ball Z - Clicky Game </div>
    <div className ="lead">
            <NavMessage></NavMessage>
             Score:{} | Top Score {}
    </div>
    </nav>
</div>
)


export default Nav;