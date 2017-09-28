import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import "./Brewery.css";
import cheers from '../cheers.jpg';
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//     return {
//       isLoggedIn: this.state.isLoggedIn
//   }

class Brewery extends Component {
    // constructor(props) {
    //     super(props);

    render() {
        
        return (
            <div className="entire-page">
                <Header />
                <div className="empty-space">
                </div>
                    <div className="all-content-container">
                        <div className="brew-image-container">
                            <img className="brew-image" src={cheers} alt="brewery"/>
                        </div>
                        <div className="brew-text-container">
                            <div className="brewery-name-container">
                                <h1 className="brewery-name">Brewery Name</h1>
                            </div>
                            <div className="brewery-desc-container">
                                <h2 className="brewery-desc">This is for the brewery description blah blah blahThis is for the brewery description blah blah blahThis is for the brewery description blah blah blahThis is for the brewery description blah blah blahThis is for the brewery description blah blah blahThis is for the brewery description blah blah blah</h2>
                            </div>
                            <div className="brewery-site-container">
                                <a className="brewery-site-name" href="http://google.com">Visit this brewery's site!</a>
                            </div>
                        </div>
                    </div>
                    <Footer />
            </div>
        );
    }
}

export default Brewery;