import React, { Component } from "react";

import 'antd/dist/antd.css';
import "./Header.css";

class Header extends Component {

    constructor() {

      super();

    //   this.state = {
    //     isActive: false
    //   };

    }

    render() {
		return (
            <header>
                <nav>
                    <ul>
                        <li class="logo"><a href="#"><i class="fa fa-file-code-o" aria-hidden="true"></i></a></li>
                        <li><a href="#">About></a></li>
                        <li><a href="#">Contact></a></li>
                    </ul>
                </nav>
                <button>Login</button>
            </header>
        )
    }
}

export default Header;