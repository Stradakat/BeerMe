import React, { Component } from 'react';
import Reclist from "./components/recList/reclist.js"
// import logo from './logo.svg';
import './index.css';
import cheers from './cheers.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Parallax } from 'react-materialize'


class App extends Component {
  render() {
    return (
      <div>
          
          <Header />

            <Parallax imageSrc={cheers} />

          <Footer />
      </div>
    );
  }
}

export default App;