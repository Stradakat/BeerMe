import React, { Component } from 'react';
import Reclist from "./components/reclist.js"
import { Parallax } from 'react-materialize'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Parallax imageSrc="https://cdn.someecards.com/posts/72hWcarbonation.gif"/>
          <h2>Welcome to React</h2>
        </div>

        <Reclist />

      </div>
    );
  }
}

export default App;
