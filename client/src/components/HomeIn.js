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
					Lorem ipsum dolor sit amet consectetur, adipiscing elit ac quisque, nisi bibendum blandit senectus. Eros massa dictum class torquent laoreet tristique, praesent fames lobortis iaculis non scelerisque vel, lacinia placerat et ornare at. Vulputate posuere vitae consequat fringilla malesuada dictum molestie viverra, senectus massa egestas neque ad nullam vel dis, ridiculus cubilia congue non pharetra quis venenatis, erat sagittis blandit tempus habitant urna justo.
				</h3>
				<br></br>
				<h3 className="content">
					Curae mi faucibus facilisi praesent vulputate accumsan pharetra mattis, ultrices scelerisque risus condimentum tempor natoque posuere vestibulum elementum, iaculis nam enim volutpat duis sed nostra. Sociis hendrerit congue varius porttitor faucibus convallis nascetur risus, id dui sollicitudin velit platea rhoncus nibh nec, mi quis cursus hac tristique posuere lobortis. Vel euismod nec cubilia orci augue per, morbi integer vitae libero sociosqu primis et, ut placerat nisl pharetra tellus.
				</h3>
			</div>
		)
		
	}
	
}

export default Jumbo;
