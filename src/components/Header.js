import React, { Component } from 'react'
import { Link } from 'react-router'

var propsObj = {
  socialUrls: {
	github: 'https://github.com/aleksivuorela',
	linkedIn: 'https://www.linkedin.com/in/aleksivuorela'
  }
};


class Header extends Component {

  render() {
	return (
	<nav id='nav' className='navbar navbar-default navbar-static-top'>
		<div className='container'>
			<ul className='nav navbar-nav'>
				<li class='active'><Link to='/home' className='nav-button'>Home</Link></li>
				<li><Link to='/portfolio' className='nav-button'>Portfolio</Link></li>
				<li><Link to='/cv' className='nav-button'>CV</Link></li>
				<li><a target='_blank' href={this.props.socialUrls.github}>Github</a></li>
				<li><a target='_blank' href={this.props.socialUrls.linkedIn}>LinkedIn</a></li>
			</ul>
		</div>
	</nav>
	);
  }
}

Header.defaultProps = propsObj;
export default Header;