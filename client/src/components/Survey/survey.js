import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Profile extends Component {

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

		let survey = []

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

    render() {
		return (
            <div>
                <Header />
				<div id="emptyDiv"></div>
					{this.createCards()}
                <Footer />
            </div>
        )
    }
}

export default Profile;