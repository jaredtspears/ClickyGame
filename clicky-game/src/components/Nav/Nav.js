
import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for Nav Bar: 
// using props here will push to Game.js
const Nav = props => (
<div>
    <nav className = "navbar navbar-expand-lg navbar-light bg-light">
   <p>Dragon Ball Z - Clicky Game </p>
    <ul>
        
            <NavMessage></NavMessage>
     
        <li>
            {/* should add in some kind of props call for these score and topScore */}
            Score:{} | Top Score {}
        </li>
    </ul>
    </nav>
</div>
)


export default Nav;