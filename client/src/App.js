import React, { Component } from 'react';
import Reclist from "./components/reclist.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Welcome to BeerME!</h2>
        </div>

        <Reclist />

      </div>
    );
  }
}

export default App;
