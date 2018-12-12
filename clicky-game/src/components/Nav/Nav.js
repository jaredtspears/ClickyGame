
import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for Nav Bar: 
// using props here will push to Game.js
const Nav = props => (
<nav className = "navbar navbar-expand-lg navbar-light bg-light">
  <ul>
      <li>
          Dragon Ball Z - Clicky Game
      </li>
      <li>
          <NavMessage></NavMessage>
      </li>
      <li>
          Score:{} | Top Score {}
      </li>
  </ul>
</nav>
)


export default Nav;