import React, { Component } from 'react'
var myPic = require('../assets/images/myPic.jpg');

class Home extends Component {

  render() {
	return (
	<div className="container">
		<div className="row">
			<header>
				<h1 className='center'>Aleksi Vuorela</h1>
				<h2 className='center title'>Software Engineering Student</h2>
			</header>
			<hr className='shorthr' />
		</div>
		<div className="row">
			<div className="col-md-4 col-md-push-8">
				<img src={myPic} className="img-circle img-responsive center-block" /><br />
			</div>
			<div className="col-md-8 col-md-pull-4">
				<h3>Who am I?</h3>
				<p>A 22-year-old dude. Passionate about learning the <strong><i>latest technologies</i></strong> and writing <strong><i>elegant code</i></strong>. Good at finding simple solutions to complex problems. I also like to develop games as a hobby.</p>
				<h3>What am I up to?</h3>
				<p>Currently having a blast working on a IoT project with React.js and AWS for the first time! Doing my 3rd year studies in software engineering. Looking for an internship position. If you're looking for a developer, consider hiring me!</p>
				<h3>Technologies I build with:</h3>
				<div style={{ marginTop: '30px' }}>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-csharp-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-cplusplus-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-java-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-javascript-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-html5-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-css3-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-dot-net-plain-wordmark center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">		
						<i className="devicon devicon-php-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-nodejs-plain-wordmark center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-react-original center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-mysql-plain center-block"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-git-plain center-block" ></i>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
  }
}

export default Home;