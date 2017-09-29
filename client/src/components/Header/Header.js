import React, { Component } from "react";
import { Button, Icon } from 'antd';
import logo from './beer.png';
import 'antd/dist/antd.css';
import "./Header.css";
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../../actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin()),
        startLogout:() => dispatch(startLogout())
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
        // isLoggedIn: false
      };
    };

    userLoc() {
        if (window.location.pathname === "/") {
            return (
                <Button onClick={this.props.startLogin} id="loginBtn" type="primary" size={this.state.size}>
                        <Icon type="login" />Login
                </Button>
            )
        } else {
            return (
                <ul id="menu">
                    <li>
                        <Button onClick={this.props.startLogout} id="logoutBtn" type="primary" size={this.state.size}>Logout<Icon type="logout" /></Button>
                    </li>
                    <li><a className={window.location.pathname === "/reclist" ? "menuWord active" : "menuWord"} href="/reclist">Recommendations</a></li>
                    <li><a className={window.location.pathname === "/brewery" ? "menuWord active" : "menuWord"} href="/brewery">Breweries</a></li>
                </ul>
            )
        }
    }

    render() {
		return (
            <header id="headerBar" to="/">
                <div id="logoDiv">
                    <img id="logoImg" src={logo} alt="Beertentious logo"/>
                    <div id="appDiv">
                        <h1 id="appName">Beertentious</h1>
                        <p>Life's too short to drink bad beer</p>
                    </div>
                </div>
                <nav>
                    {this.userLoc()}
                </nav>
            </header>
        )
    }
}

export default connect(undefined, mapDispatchToProps)(Header);