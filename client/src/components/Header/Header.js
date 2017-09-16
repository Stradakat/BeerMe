import React, { Component } from "react";
import { Button } from 'antd';
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
            <header>
                <nav>
                    <ul>
                        <li className="logo"><a href="#"><i className="fa fa-file-code-o"></i></a></li>
                        <li><a href="#">About></a></li>
                        <li><a href="#">Contact></a></li>
                    </ul>
                </nav>
                <Button type="primary" size={size}>Login</Button>
            </header>
        )
    }
}

export default Header;