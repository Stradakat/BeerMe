import React from 'react';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    console.log("component mounted")
    console.log(this.props);
    this.props.requestBeers();
  }
  render() {
    return (
      <div>
        Hello, I am alive.  Please set me free!
      </div>
    )
  }
}

export default Beers;