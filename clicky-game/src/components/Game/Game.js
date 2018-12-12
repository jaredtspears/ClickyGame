import React, { Component } from "react";

// importing all other components into this game component
import Nav from "../Nav";
import NavMessage from "../NavMessage";
import ClickItem from "../ClickItem";
import Container from "../Container";
import Footer from "../Footer";
// importing data from tiles json
import clickTiles from "../../clickTiles.json"

// game state that will have data score and topScore
class Game extends Component {
    state = { 
        clickTiles,
        score: 0,
        topScore: 0
     }

    //  score and topScore need to be evaluated 
    //  should document clickTiles on users guess results
    // what happens if user is correct
    //what happens if user is incorrect

    // Tiles should be randomized 
    //(ideally flip card while randomizing)
//=====NOT WORKING YET==================================
    randomizer = clickTiles => {
        //use let here because i will be restructured
        let i = clickTiles.length - 1;
        if(i>0){
        // setting var j to be the randomizer variable
        const j = Math.floor(Math.random()*(i+1))
        }
    }
    render() { 
        // this will return how the other components will be structured on the page:
        return ( 
            <div>
                <Nav></Nav>
                <NavMessage/>
                <Container>
                    <ClickItem/>
                </Container>
                <Footer/>
            </div>
         );
    }
}
 
export default Game;
