import React, { Component } from 'react'

var propsObj = {
  contactInfo: {
	email: 'aleksii.vuorela(at)gmail.com',
	phone: '044 0711969'
  }
};

class Footer extends Component {

  render() {
	return (
		<div className='navbar navbar-default navbar-fixed-bottom'>
			<div className='container'>
				<ul id='footer' className='nav navbar-nav'>
					<li>Contact me at <strong>{this.props.contactInfo.email}</strong> or call <strong>{this.props.contactInfo.phone}</strong></li>
				</ul>
			</div>
		</div>
	);
  }
}

Footer.defaultProps = propsObj;
export default Footer;