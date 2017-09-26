import React, { Component } from 'react';
import { Card, Rate, Icon, Modal, Button } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import './reclist.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { requestBeers } from '../../actions'

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
//		console.log(this.props)
		this.props.getBeerListing();
	}

	rating(type, beer, rate) {
		this.props.toTry[type].recs[beer].like = rate
		this.props.toTry[type].recs[beer].reviewed = true
	}

	createCards(h) {

		let reccomends = []

		for (let i = 0; i < this.props.toTry[h].recs.length; i++){
			let beerRec = this.props.toTry[h].recs[i]
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
		console.log(this.props.toTry)
		
		for (let h = 0; h < this.props.toTry.length; h++){
			bars.push(
				<div key={h}>
					<h1>{this.props.toTry[h].type}</h1>
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
								<Rate className={this.props.chosenModal.reviewed ? "reviewed" : "notReviewed"} character={<Icon type="smile" />} defaultValue={this.props.chosenModal.like} />
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
		chosenModal: state.receiveItems.chosenModal
		
	}
}
  
//connects redux actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getBeerListing: requestBeers
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecList);