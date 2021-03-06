import React, { Component } from 'react';
import { Card, Rate, Icon, Modal, Button } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import './reclist.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { requestBeers, updateBeer } from '../../actions'
class RecList extends Component {
	constructor(props) {
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		console.log("component mounted")
//		console.log(this)
//		this.setState({beerListing: this.props.getBeerListing()})
//		this.props.beerListing = this.props.getBeerListing();
		this.props.getBeerListing();
	}

	rating(type, beer, rate, userID) {
		console.log(type, beer, rate, userID)
		this.props.updateBeer(type, beer, rate, userID);
		/*
		this.props.toTry[type].recs[beer].like = rate
		this.props.toTry[type].recs[beer].reviewed = true
*/
	}

	createCards(h, recommendedBeers) {
		let reccomends = [];
		let recommendedBeer = recommendedBeers[h]

		for(var i = 0; i < recommendedBeer.recs.length; i++) {
			let beerRec = recommendedBeer.recs[i]
			console.log(beerRec)
			reccomends.push(
				<div key={`${h}_${i}`}>
					<Card bordered={false}>
						<div>
							<img className="beerImg" src={beerRec.pic} alt="beer" onClick={() => this.showModal(beerRec)}></img>
						</div>
						<div className="rating">
							<Rate className={this.props.chosenModal.reviewed ? "reviewed" : "notReviewed"} character={<Icon type="smile" />} defaultValue={this.props.chosenModal.like} onChange={(rating) => this.rating(h, beerRec.id, rating, this.props.userAuth)}/>
						</div>
					</Card>
				</div>
			)
		}
		return reccomends
	}

	createRows(item){
		let bars = []
		let reccommendations = item;
		for (let h = 0; h < reccommendations.length; h++){
			bars.push(
				<div key={h}>
					<h1 className="beerType">{reccommendations[h].type}</h1>
					<div  className="recBar">
			    		{this.createCards(h, reccommendations)}
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
	    		<div id="recWrapper">
					{this.props.toTry.map(beerGroup => this.createRows(beerGroup))}
		    	</div>
		    	<Modal 
		    		title={this.props.chosenModal.name}
		    		visible={this.props.visible}
		    		onOk={this.handleOk}
		    		onCancel={this.handleCancel}
		    		footer={[
            			<Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
          			]}>

     				<div>
     					<Card onClick={this.modalTest} >
							<div>
								<img className="beerImg" src={this.props.chosenModal.pic} alt="beer"></img>
							</div>
							<div className="rating">
								<Rate character={<Icon type="smile" />} onChange={(rating) => this.rating(1, this.props.chosenModal.id, rating)}/>
							</div>
						</Card>
     				</div>
        		</Modal>
        		<Footer />
		    </div>
	    );
	}
}

//connects root reducer to props
function mapStateToProps(state) {
	return {
		beerListing: state.receiveItems.beerListing,
		toTry: state.receiveItems.toTry,
		chosenModal: state.receiveItems.chosenModal,
		userAuth: state.auth.auth		
	}
}
  
//connects redux actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getBeerListing: requestBeers,
		updateBeer: updateBeer
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecList);