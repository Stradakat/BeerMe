import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './profile.css';

class Profile extends Component {

	state = {
		userPhoto: "http://strangebeaver.com/wp-content/uploads/2011/01/fb/1.jpg",
		userName: "Lotte Brewski"
	}

	retProfile() {
		return (

			<div>
				<div id="leftSide">
					<img src={this.state.userPhoto}></img>
					<h1 id="userName">{this.state.userName}</h1>
				</div>
			</div>
		)
	}

	retReviewed() {
		return (
			<div>

			</div>
		)
	}

    render() {
		return (
            <div>
                <Header />
				<div id="emptyDiv"></div>

                {this.retProfile()}

                {this.retReviewed()}

                <Footer />
            </div>
        )
    }
}

export default Profile;