import React, { Component } from "react";
import { Button, Icon } from 'antd';
import logo from './beer.png';
import 'antd/dist/antd.css';
import "./Header.css";
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../../actions/auth';

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin()),
        startLogout: () => dispatch(startLogout())
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         startLogout: () => dispatch(startLogout())
//     }
// }

class Header extends Component {

    constructor(props) {
        super(props);

    this.state = {
        size: 'large',
      };
    };

    userLoc(){
        if (window.location.pathname === "/"){
            return (
                <Button onClick={this.props.startLogin} id="loginBtn" type="primary" size={this.state.size}>
                        <Icon type="login" />Login
                </Button>
            )
        } else {
            return (
                <ul id="menu">
                    <li><a className="menuWord" href="#">Profile</a></li>
                    <li><a className="menuWord" href="#">Reccomendations</a></li>
                    <li><a className="menuWord" href="#">Breweries</a></li>
                </ul>
            )
        }
    }

    render() {
        const size = this.state.size;
		return (
            <header id="headerBar" to="/">
                <div id="logoDiv">
                    <img id="logoImg" src={logo} />
                    <div id="appDiv">
                        <h1 id="appName">Beertentious</h1>
                        <p>I don't drink that swill</p>
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