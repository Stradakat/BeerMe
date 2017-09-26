import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Profile extends Component {

	state = {
	}

    render() {
		return (
            <div>
                <Header />
				<div id="emptyDiv"></div>

                <Footer />
            </div>
        )
    }
}

export default Profile;