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
				<img src={myPic} className="img-circle img-responsive center-block" alt="" /><br />
			</div>
			<div className="col-md-8 col-md-pull-4">
				<h3>Who am I?</h3>
				<p>A 22-year-old dude. Passionate about learning the <strong><i>latest technologies</i></strong> and writing <strong><i>elegant code</i></strong>. Good at finding simple solutions to complex problems. I also like to develop (and play) games as a hobby.</p>
				<h3>What am I up to?</h3>
				<p>I'm currently working full-time as software developer at <a target='_blank' href="http://meiko.fi/">Meiko Oy</a>. My work is mainly front-end development with React. I'm also doing my 3rd year studies in software engineering at JAMK.</p>
				<h3>Technologies I build with:</h3>
				<div style={{ margin: '30px 0 0 -20px' }}>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-csharp-plain center-block" title="C#"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-cplusplus-plain center-block" title="C++"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-java-plain center-block" title="Java"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-javascript-plain center-block" title="JavaScript"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-html5-plain center-block" title="HTML"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-css3-plain center-block" title="CSS"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-dot-net-plain-wordmark center-block" title=".NET"></i>
					</div>
					<div className="col-sm-2 col-xs-3">		
						<i className="devicon devicon-php-plain center-block" title="PHP"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-nodejs-plain-wordmark center-block" title="Node.js"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-react-original center-block" title="React.js"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-mysql-plain center-block" title="MySQL"></i>
					</div>
					<div className="col-sm-2 col-xs-3">
						<i className="devicon devicon-git-plain center-block" title="Git"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
  }
}

export default Home;