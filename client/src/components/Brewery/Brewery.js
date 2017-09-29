import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import "./Brewery.css";
import cheers from '../cheers.jpg';
import { Card, Rate, Icon, Modal, Button } from 'antd';
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//     return {
//       isLoggedIn: this.state.isLoggedIn
//   }

class Brewery extends Component {
    
    state = {
        breweries: [{
            name: "Stone",
            img: "https://www.arlnow.com/wp-content/uploads/2013/10/Roommates-Brewery-logo.jpg"
            },
            {
            name: "Mother Earth",
            img: "https://ogn833g0ghx1x11kg4cgt3z4-wpengine.netdna-ssl.com/wp-content/uploads/2014/03/Pizza-Port-Brewing-Company.jpg"
            },
            {
            name: "Belching Beaver",
            img: "https://www.americancraftbeer.com/images/stories/article_images/2015/05/san-diego/belching_beaver.png"
            },
            {
            name: "Culture",
            img: "http://www.themomentumoffailure.com/wp-content/uploads/2014/12/moderntimeslogotm.png"
            },
            {
            name: "Ballast Point",
            img: "https://i.pinimg.com/736x/46/39/2c/46392c7ce7046ad03d6f19be648e57b0--beer-bar-vintage-logos.jpg"
            },
        ],
        selected: {}
    }

    createCards() {
        let brewCards = [];

        for(var i = 0; i < this.state.breweries.length; i++) {
            let brewRec = this.state.breweries[i]
            brewCards.push(
                <div key={i}>
                    <Card bordered={true}>
                        <div>
                            <img className="brewImg" src={brewRec.img} alt={brewRec.name}></img>
                        </div>
                    </Card>
                </div>
            )
        }
        return brewCards
    }

    render() {
        
        return (
            <div className="entire-page">
                <Header />
                <div className="empty-space"></div>
                <div className="brewRow">
                    {this.createCards()}
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