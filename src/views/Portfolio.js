import React, { Component } from 'react';

var propsObj = {
  project: {
	name: 'Atlas',
	desc: 'Project management tool',
	img: require('../assets/images/myPic.jpg')
  }
};

class Portfolio extends Component {

  render() {  	
	return (
		<div>
			<h2>Portfolio coming soon...</h2>
		</div>
	);
  }
}

Portfolio.defaultProps = propsObj;
export default Portfolio;