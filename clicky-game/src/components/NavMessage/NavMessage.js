import React, { Component } from "react";
import "./NavMessage.css";

//navMessage is rendered to interact with the user upon starting the game or in the game itself
//notifying if the state will display correct or incorrect upon user interaction with the tiles
class NavMessage extends Component {
    state = {
        message:"",
        animating:false
    }
};

// ===========NOT FINISHED THIS newState ==================
// this is where newState() from default state, 
//correct acknowledgement, and incorrect acknowledgement
// ScorePromptsChange(){
// // new state for animate would be true
//   const newState ={animate:true};
// // if/else here:

// }
// =======================================================

// this will be to switch between message options
switchMessage = () => {
switch(this.state.message){
    case "correct": 
      return "You guessed correctly!";
    break;
    case "incorrect":
      return "you guessed incorrectly! "
    break;
    default:
      return "Click a DBZ Character to begin!"
  
} 
};

// being this should be in the navbar as a list to display
//diplaying the messages discribed above
// render(){
//     return(
//         <div>
//             <li>
//                 {switchMessage()}
//             </li>
//         </div>
//     )
// }


export default NavMessage;