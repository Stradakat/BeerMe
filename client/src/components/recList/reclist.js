import React, { Component } from 'react';
import { Card, Rate, Icon, Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './reclist.css'

class RecList extends Component {
	state = {
		visible: false,
		toTry: [{
				type: "Random Beer",
				recs: [{
						name: "PBR",
						like: 4,
						pic: "https://dydza6t6xitx6.cloudfront.net/ci_1143.jpg"
					},
					{
						name: "Duff",
						like: 3,
						pic: "http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_112699.jpg"
					},
					{
						name: "Budweiser",
						like: 2,
						pic: "https://dydza6t6xitx6.cloudfront.net/ci_2822.jpg"
					},
					{
						name: "Bud Light",
						like: 5,
						pic: "http://www.totalwine.com/media/sys_master/twmmedia/h78/hf8/9770809884702.png"
					},
					{
						name: "Coors",
						like: 4,
						pic: "https://onlinecashandcarry.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sol_beer_nrb_330ml.jpg"
					}]
			}]
	}


	createCards(h) {
		console.log(h)
		let reccomends = []

		for (let i = 0; i < this.state.toTry[h].recs.length; i++){
			let beerRec = this.state.toTry[h].recs[i]
			reccomends.push(
				<div key={i}>
					<Card bordered={false} onClick={this.showModal.bind(h, i)} data-type={h} data-beer={i}>
						<div>
							<img className="beerImg" src={beerRec.pic} alt="beer"></img>
						</div>
						<div className="rating">
							<Rate character={<Icon type="smile" />} defaultValue={beerRec.like}/>
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


	showModal = (type, beer) => {
		console.log("Type = "+type)
		console.log("beer = "+beer)
	    this.setState({
	   		visible: true,
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
		    	{this.createRows()}
		    	<Modal 
		    		visible={this.state.visible}
		    		onOk={this.handleOk}
		    		onCancel={this.handleCancel}
		    		footer={[
            			<Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
          			]}>

        		</Modal>
		    </div>
		    
		    
	    );
	}
}

export default RecList;