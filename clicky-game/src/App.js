import React, { Component } from 'react';
import './App.css';
// importing Game.js component:
import Game from "./components/Game"

const App = () => <Game/>


// not sure if I will need to have the below default template
//the above import of Game should render all other components 
class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
