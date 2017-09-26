import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax';
import cheers from './cheers.jpg';
import '../index.css'

class Jumbo extends Component {

	render () {
		return (
			<div>
				<Parallax bgImage={cheers} strength={500}>
				</Parallax>
				<h3 className="content">
				How many times have you met friends at a micro-brewery and were confused by the beer selections and beer-nerd related descriptions?   We have simplified the process, by taking a brief survey where you rank beers you like in a 5 start scale Beertentious will recommend beers you are likely to enjoy.  So next time you are faced with a beer list that looks like an ancient elements table written in flemish, just pull out your phone and type in the brewery location.  Using a huge database Beertentious will then recommend several beers.  Easy as that!!!
				</h3>
				<br></br>
				<h3 className="content">
				Please take part in our brief survey page and you will be on the road to beer enjoyment without all of the BeerNerdTalk…..
				</h3>
			</div>
		)
		
	}
	
}

export default Jumbo;
