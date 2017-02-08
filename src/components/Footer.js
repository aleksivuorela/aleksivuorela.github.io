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
		<nav className='navbar navbar-default navbar-fixed-bottom'>
			<div className='container'>
				<ul id='footer' className='nav navbar-nav'>
					<li>
						<span className="glyphicon glyphicon-envelope" style={{ padding: '0 5px 0 0' }}></span>{this.props.contactInfo.email}
						<span className="glyphicon glyphicon-earphone" style={{ padding: '0 5px 0 10px' }}></span>{this.props.contactInfo.phone}
					</li>
				</ul>
			</div>
		</nav>
	);
  }
}

Footer.defaultProps = propsObj;
export default Footer;