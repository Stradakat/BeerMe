import React, { Component } from "react";
import { Parallax } from 'react-parallax';
import { Card } from 'antd';
import cheers from './cheers.jpg';
import '../index.css'

class Jumbo extends Component {

	render () {
		return (
			<div className="whole-page">
				<Parallax bgImage={cheers} strength={500}>
                </Parallax>
                <div className="intro-and-cards-container">
                    <div className="intro-container">
                        <p className="intro-text">Are you overwhelmed by the selection at breweries?</p>
                        <p className="intro-text">Not exactly sure which types of beers you like?</p>
                        <p className="intro-text">Be matched with beers you'll love in just 3 easy steps:</p>
                    </div>
                    
                    <div className="cards-container">

                        <Card className="card-container" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                            <i className="fa fa-question-circle icon" aria-hidden="true"></i>
                            <div className="custom-card">
                                <h3 className="tagline">1. take a survey</h3>
                            </div>
                        </Card>

                        <Card className="card-container" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                            <i className="fa fa-beer icon" aria-hidden="true"></i>
                            <div className="custom-card">
                                <h3 className="tagline">2. browse beers</h3>
                            </div>
                        </Card>

                        <Card className="card-container" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                            <i className="fa fa-thumb-tack icon" aria-hidden="true"></i>
                            <div className="custom-card">
                                <h3 className="tagline">3. find a brewery</h3>
                            </div>
                        </Card>

                    </div>
                </div>
			</div>
		)
	}
}

export default Jumbo;
