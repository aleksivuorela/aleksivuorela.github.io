import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

var propsObj = {
  urls: {
  	cv: 'https://www.visualcv.com/aleksi-vuorela',
	github: 'https://github.com/aleksivuorela',
	linkedIn: 'https://www.linkedin.com/in/aleksivuorela'
  }
};


class Header extends Component {

  render() {
	return (
	<nav className='navbar navbar-default navbar-static-top'>
		<div className='container'>
			<ul className='nav navbar-nav'>
				<li><IndexLink to='/' className='nav-button'>Home</IndexLink></li>
				<li><Link to='/portfolio' className='nav-button'>Portfolio</Link></li>
				<li><a target='_blank' href={this.props.urls.cv}>CV</a></li>
				<li><a target='_blank' href={this.props.urls.github}>Github</a></li>
				<li><a target='_blank' href={this.props.urls.linkedIn}>LinkedIn</a></li>
			</ul>
		</div>
	</nav>
	);
  }
}

Header.defaultProps = propsObj;
export default Header;