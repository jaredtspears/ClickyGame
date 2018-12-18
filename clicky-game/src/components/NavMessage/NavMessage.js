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
    componentDidMount(){
        this.setState(
            {score: this.scoreLogger()}
        )
    }
    // updates the state each tile click
    scoreLogger = (score, topScore) =>{
        let newState=this.state.message
        // if score & topScore are zero then the message is blank, otherwise correct or incorrect
        if(score === 0 && topScore === 0){
            newState = "";
        }else if(score !== 0 && topScore > 0){
            newState = "correct";
        }else{
            newState = "incorrect";
        } 
        // new state
        if (score !== this.state.score || this.state.message !== newState.message){
            this.setState({newState});
        }
    }

        // const {score, topScore} = this.state.message

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
                   rendering switch message here (not working yet) 
                   {this.state.scoreLogger}
                   {/* {this.state.switchMessage} */}
                </li>
            </div>
        );
    }
};

export default NavMessage;