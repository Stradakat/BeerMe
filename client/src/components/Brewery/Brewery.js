
import { Card, Rate, Icon, Modal, Button } from 'antd';
import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import "./Brewery.css";
import cheers from '../cheers.jpg';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { requestBrewery } from '../../actions'

class Brewery extends Component {


    constructor(props) {
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		console.log("component mounted")
		this.props.getBrewery("nMaqhu");
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
}

//connects root reducer to props
function mapStateToProps(state) {
    return {
        breweryDetails: state.receiveItems.breweryDetails
	}
}
  
//connects redux actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getBrewery: requestBrewery
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
