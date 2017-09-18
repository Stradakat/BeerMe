import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import cheers from './cheers.jpg';
// import { Button } from 'antd';
import 'antd/dist/antd.css';

class HomePage extends Component {

    // constructor() {
    //   super();
    // }

    render() {
        // const size = this.state.size;
		return (
            <div>
                <Header />

                <h1>Beer Me</h1>
                <div class="main-wrapper">
                <img src={cheers} alt="prost!"/>
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default HomePage;