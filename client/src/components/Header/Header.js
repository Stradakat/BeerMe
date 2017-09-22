import React, { Component } from "react";
import { Button } from 'antd';
import logo from './beer.png';
import 'antd/dist/antd.css';
import "./Header.css";

class Header extends Component {

    constructor() {
      super();

    //   this.state = {
    //     isActive: false
    //   };

    this.state = {
        size: 'large',
      };
    };

    render() {
        const size = this.state.size;
		return (
            <header id="headerBar">
                <div id="logoDiv">
                    <img id="logoImg" src={logo} />
                    <div id="appDiv">
                        <h1 id="appName">Beertentious</h1>
                        <p>I don't drink that swill</p>
                    </div>
                </div>
                <nav>
                    <ul id="menu">
                        <li><Button type="primary" size={size}>Login</Button></li>
                        <li><a className="menuWord" href="#">About</a></li>
                        <li><a className="menuWord" href="#">Contact</a></li>
                    </ul>
                </nav>
                
            </header>
        )
    }
}

export default Header;