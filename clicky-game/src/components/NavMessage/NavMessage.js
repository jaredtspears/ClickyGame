import React, { Component } from "react";
import "./NavMessage.css";

//navMessage is rendered to interact with the user upon starting the game or in the game itself
//notifying if the state will display correct or incorrect upon user interaction with the tiles
class NavMessage extends Component {
    state = {
        message:"",
        animating:false,
        score:0,
        topScore:0
    }
    // updates the state each tile click
    // componentDidUpdate(props) {
    //     //var for newState when the new state is when the animating is true
    //     let newState = props.message

    //     // scores have to be updated each state - setting to prevProps paramiter
    //     const {score, topScore} = props.message

    //     // if score & topScore are zero then the message is blank, otherwise correct or incorrect
    //     if(score === 0 && topScore === 0){
    //         newState.message = "";
    //     }else if(score !== 0 && topScore > 0){
    //         newState.message = "correct";
    //     }else{
    //         newState.message = "incorrect";
    //     } 
    //     // new state
    //     if (score !== this.props.score || this.state.message !== newState.message){
    //         this.setState(newState);
            
    //     }
    // }

    // this will be to switch between message options
    switchMessage = () => {
            switch(this.state.message){
            case "correct": 
            return "You guessed correctly!";
            case "incorrect":
            return "you guessed incorrectly! "
            default:
            return "Click a DBZ Character to begin!"
        } 
    };

    // being this should be in the navbar as a list to display
    //diplaying the messages discribed above
    render(){
        return(
            <div>
                <li>
                   rendering switch message here (not working yet) {this.switchMessage()}
                </li>
            </div>
        );
    }
};

export default NavMessage;