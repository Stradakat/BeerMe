import React, { Component } from 'react';
import { Card, Rate, Icon, Modal, Button } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import './reclist.css';

class RecList extends Component {
	state = {
		chosenModal: {},
		visible: false,
		toTry: [{
				type: "Random Beer",
				recs: [{
						name: "PBR",
						like: 4,
						pic: "https://dydza6t6xitx6.cloudfront.net/ci_1143.jpg",
						reviewed: false
					},
					{
						name: "Duff",
						like: 3,
						pic: "http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_112699.jpg",
						reviewed: false
					},
					{
						name: "Budweiser",
						like: 2,
						pic: "https://dydza6t6xitx6.cloudfront.net/ci_2822.jpg",
						reviewed: false
					},
					{
						name: "Bud Light",
						like: 5,
						pic: "http://www.totalwine.com/media/sys_master/twmmedia/h78/hf8/9770809884702.png",
						reviewed: false
					},
					{
						name: "Coors",
						like: 4,
						pic: "https://onlinecashandcarry.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sol_beer_nrb_330ml.jpg",
						reviewed: false
					}]
			}]
	}

	rating(type, beer, rate) {
		this.state.toTry[type].recs[beer].like = rate
		this.state.toTry[type].recs[beer].reviewed = true
	}

	createCards(h) {

		let reccomends = []

		for (let i = 0; i < this.state.toTry[h].recs.length; i++){
			let beerRec = this.state.toTry[h].recs[i]
			reccomends.push(
				<div key={i}>
					<Card bordered={false}>
						<div>
							<img className="beerImg" src={beerRec.pic} alt="beer" onClick={() => this.showModal(beerRec)}></img>
						</div>
						<div className="rating">
							<Rate className={beerRec.reviewed ? "reviewed" : "notReviewed"} rate-key={i} character={<Icon type="smile" />} defaultValue={beerRec.like} onChange={(rating) => this.rating(h, i, rating)} />
						</div>
					</Card>
				</div>
			)
		}

		return reccomends
	}

	createRows(){
		let bars = []

		for (let h = 0; h < this.state.toTry.length; h++){
			bars.push(
				<div key={h}>
					<h1>{this.state.toTry[h].type}</h1>
					<div  className="recBar">
						
			    		{this.createCards(h)}
			    	</div>
			    </div>
		    )
		}

		return bars
	}


	showModal = (beer) => {
	    this.setState({
	   		visible: true,
	   		chosenModal: beer
	   	});
  	}

	handleOk = () => {
	    this.setState({
	      	visible: false,
	    });
	}

	handleCancel = () => {
	    this.setState({
	      	visible: false,
	    });
	}


	render() {

	    return (
	    	<div>
	    		<Header />
	    		<div id="emptySpace"></div>
		    		{this.createRows()}
		    	<Modal 
		    		title={this.state.chosenModal.name}
		    		visible={this.state.visible}
		    		onOk={this.handleOk}
		    		onCancel={this.handleCancel}
		    		footer={[
            			<Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
          			]}>

     				<div>
     					<Card onClick={this.modalTest} >
							<div>
								<img className="beerImg" src={this.state.chosenModal.pic} alt="beer"></img>
							</div>
							<div className="rating">
								<Rate className={this.state.chosenModal.reviewed ? "reviewed" : "notReviewed"} character={<Icon type="smile" />} defaultValue={this.state.chosenModal.like} />
							</div>
						</Card>
     				</div>
        		</Modal>

        		<Footer />
		    </div>
		    
	    );
	}
}

export default RecList;