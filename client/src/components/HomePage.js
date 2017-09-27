import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import cheers from './cheers.jpg';
// import { Button } from 'antd';
// import 'antd/dist/antd.css';
// import { Parallax } from 'react-materialize';
// import '../index.css';
import Jumbo from './HomeIn.js'
import Beers from './../containers/beers'

class HomePage extends Component {  

    // constructor() {
    //   super();
    // }

    render() {
        // const size = this.state.size;
		return (
            <div>
                <Header />
                <Jumbo />
                <Beers />
                <Footer />
            </div>
        )
    }
}

export default HomePage;