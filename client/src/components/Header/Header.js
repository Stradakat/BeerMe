import React, { Component } from "react";
import { Button, Icon } from 'antd';
import logo from './beer.png';
import 'antd/dist/antd.css';
import "./Header.css";
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../../actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
//         // console.log('inside mapdispatchtoProps')
        startLogin: () => dispatch(startLogin())
//         startLogout:() => dispatch(startLogout())
    }
}

// const mapStateToProps = (state) => {
//     return {
//       isLoggedIn: this.state.isLoggedIn
//   }

class Header extends Component {

    constructor(props) {
      super(props);

    this.state = {
        size: 'large',
        isLoggedIn: false
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
                        <li>
                            <div>
                                {this.state.isLoggedIn ? (
                                    <Button onClick={this.props.startLogout} id="loginBtn" type="primary" size={size}><Icon type="logout" />Logout</Button>
                                ) : (
                                    <Button onClick={this.props.startLogin} id="loginBtn" type="primary" size={size}><Icon type="login" />Login</Button>
                                )}
                            </div>
                        </li>
                        <li><a className="menuWord" href="#">About</a></li>
                        <li><a className="menuWord" href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default connect(undefined, mapDispatchToProps)(Header);