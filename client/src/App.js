import React, { Component } from 'react';
import Reclist from "./components/recList/reclist.js"
// import logo from './logo.svg';
import './App.css';
import cheers from './cheers.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

class App extends Component {
  render() {
    return (
      <div>
          
          <Header />
          <h1>Beer Me</h1>
          <div class="main-wrapper">
            <img src={cheers} />
          </div>

          <Footer />


      </div>
    );
  }
}

export default App;