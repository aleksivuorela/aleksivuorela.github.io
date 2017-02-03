import React, { Component } from 'react'
import { Col, Row, Image } from 'react-bootstrap'

var myPic = require('../assets/images/myPic.jpg');

class Home extends Component {

  render() {
	return (
	<div className="container">
		<Row>
			<header>
				<h1>Aleksi Vuorela</h1>
				<h2>Software Engineering Student</h2>
			</header>
			<hr />
		</Row>
		<Row>
			<Col xs={12} md={8}>
				<h3>Who am I?</h3>
				<p>A 22-year-old dude. Passionate about learning the <strong><i>latest technologies</i></strong> and writing <strong><i>elegant code</i></strong>. Good at finding simple solutions to complex problems. I also like to develop games as a hobby.</p>
				<h3>What am I up to?</h3>
				<p>Currently having a blast working on a IoT project with React.js and AWS for the first time! Doing my 3rd year studies in software engineering. Looking for an internship position.</p>
				<h3>Technologies I build with:</h3>
				<p>
					<i className="devicon devicon-csharp-plain"></i>					
					<i className="devicon devicon-cplusplus-plain"></i>
					<i className="devicon devicon-java-plain"></i>
					<i className="devicon devicon-javascript-plain"></i>
					<i className="devicon devicon-html5-plain"></i>
					<i className="devicon devicon-css3-plain"></i>
				</p>
				<p>
					<i className="devicon devicon-dot-net-plain-wordmark"></i>			
					<i className="devicon devicon-php-plain"></i>
					<i className="devicon devicon-nodejs-plain-wordmark"></i>
					<i className="devicon devicon-react-original"></i>
					<i className="devicon devicon-mysql-plain"></i>
					<i className="devicon devicon-git-plain"></i>
				</p>
			</Col>
			<Col xsHidden md={4}>
				<Image src={myPic} circle responsive />
			</Col>
		</Row>
	</div>
	);
  }
}

export default Home;