import React, { Component } from "react";
import "./NavMessage.css";

//navMessage is rendered to interact with the user upon starting the game or in the game itself
//notifying if the state will display correct or incorrect upon user interaction with the tiles
class NavMessage extends Component {
    // creating a state for the message, default will not be animating, this will be done with the function below to calcute the message options upon player interaction
    state = {
        message:"",
        animating:false
    }
}
// will need to calculate score with a function for correct or incorrect



//will need to have a switch statement that notifieds if the message will be 
//"you guessed correctly" || "you guessed incorrectly"
// default will be: "Click any image to begin"






export default NavMessage;