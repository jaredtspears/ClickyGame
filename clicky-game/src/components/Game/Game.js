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
        topScore: 0,
        message: ''
     }
   componentDidMount() {
       this.setState(
        {clickTiles:this.randomizer(clickTiles)});
        // this.correctGuess(),
        // this.incorrectGuess()
        this.handleIncrement() //not working
   }
    
   handleIncrement = () =>{
       const newScore = this.state.score +1; 
       this.setState({
           score: newScore
       })
       console.log("this is the new score" + newScore);
   }
    randomizer = data => {
        //use let here because i will be restructured
        let i = data.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
      };
    clicker = click =>{
        // changing state calling randomizer function on the tiles
        this.setState({clickTiles:this.randomizer(clickTiles)})
        console.log(click);
    }

    // function for guessing correctly
    correctGuess = newData => {
        let newScore = this.state.score;
        newScore++
        let NewTopScore = Math.max(newScore, this.state.topScore);

        this.setState({
            clickTiles: this.randomizer(newData),
            score: newScore,
            topScore: NewTopScore
        })
    }

    incorrectGuess = newData => {
        this.setState({
            clickTiles: this.randomizer(newData),
            score:0
        })
    }
    render() { 
        // this will return how the other components will be structured on the page:
        return ( 
            <div>
                <Nav>
                    <NavMessage/>
                    {/* should add in some kind of props call for these score and topScore */}
                    Score:{this.state.handleIncrement} | Top Score {this.state.topScore}
                </Nav>
                <Container>
                    {this.state.clickTiles.map(item =>(
                        <ClickItem 
                        handleClick = {this.clicker }
                        image = {item.image}
                        id = {item.id}
                        key = {item.id}
                        />
                        ) 
                    )}
                </Container>
                <Footer/>
            </div>
         );
    }
}
 
export default Game;
