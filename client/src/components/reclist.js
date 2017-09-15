import React, { Component } from 'react';
import { Card, Rate, Icon } from 'antd';
import 'antd/dist/antd.css';
import './reclist.css'

class RecList extends Component {

	createCards() {
		let reccomends = []

		for (let i = 0; i < 6; i++){
			reccomends.push(
				<div key={i}>
					<Card bordered={false}>
						<div>
							<img className="beerImg" src="http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_112699.jpg" alt="beer"></img>
						</div>
						<div className="rating">
							<Rate character={<Icon type="smile-o" />} />
						</div>
					</Card>
				</div>
			)
		}

		return reccomends
	}

	render() {

	    return (
	    	<div>
	    		<h1>Beer</h1>
		    	<div className="recBar">
		    		{this.createCards()}
		    	</div>
		    </div>
	    );
	}
}

export default RecList;