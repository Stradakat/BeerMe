import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Jumbo from './HomeIn.js'
// import Beers from './../containers/beers'

class HomePage extends Component {  

    // constructor() {
    //   super();
    // }

    render() {
		return (
            <div>
                <Header />
                <Jumbo />
                <Footer />
            </div>
        )
    }
}

export default HomePage;