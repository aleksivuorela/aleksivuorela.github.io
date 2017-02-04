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
		<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<h2 className="page-header">Latest Projects</h2>
			</div>
		</div>

		<div className="row">
			<div className="col-md-7">
				<img className="img-responsive" src={require('../assets/images/iotstack.png')} alt="" />
			</div>
			<div className="col-md-5">
				<h2>IoT stack project for Digia</h2>
				<div className="tag-list">
					<span className="label label-default tag">JavaScript</span>
					<span className="label label-default tag">React.js</span>
					<span className="label label-default tag">Node.js</span>
					<span className="label label-default tag">AWS</span>
					<span className="label label-default tag">Raspberry Pi</span>
					<span className="label label-default tag">Bash</span>
				</div>			
				<p>Project that I'm currently working on untill 27.2.2017. Building IoT stack for <strong><i>collecting</i></strong>, <strong><i>storing</i></strong> and <strong><i>visualizing</i></strong> time-series data. My role in the project is building front- and backend for the application.</p>
				<p>I'm building the frontend with React.js for the first time. For that I've studied Webpack, ES6 and Babel. I've also dabbled with some AWS stuff:
				<ul style={{ margin: '10px 0 0 0' }}>
					<li>sending data from application to device with AWS IoT SDK</li> 
					<li>set up CI/CD pipeline with CodePipeline, Github and CodeDeploy</li>
					<li>bash scripts to setup/start Node.js automatically on EC2 instance</li>
				</ul>
				</p>
				<div className="tag-list">
					<a href="https://github.com/DigiaMinions/Project"><i className="devicon-github-plain"></i> Source</a>
					<a href="https://github.com/DigiaMinions/Project/wiki"><i className="devicon-github-plain"></i> Wiki</a>
				</div>
			</div>
		</div>

		<hr/>

		<div className="row">
			<div className="col-md-7">
					<img className="img-responsive" src="https://raw.githubusercontent.com/vuoale/NodeJS-Multiplayer/master/img/arkkitehtuuri.jpg" alt=""/>
			</div>
			<div className="col-md-5">
				<h2>Node.js Multiplayer</h2>
				<div className="tag-list">
					<span className="label label-default tag">JavaScript</span>
					<span className="label label-default tag">Node.js</span>
					<span className="label label-default tag">Express.js</span>
					<span className="label label-default tag">Socket.IO</span>
					<span className="label label-default tag">MongoDB</span>
				</div>	
				<p>A little <strong><i>real-time multiplayer</i></strong> game that I built myself to learn Node.js and <strong><i>WebSockets</i></strong>. Had a lot of fun making it and actually ended up reading a whole book on JavaScript while doing so.</p>
				<div className="tag-list">
					<a href="https://github.com/aleksivuorela/NodeJS-Multiplayer"><i className="devicon-github-plain"></i> Source</a>
					<a href="https://github.com/aleksivuorela/NodeJS-Multiplayer/wiki"><i className="devicon-github-plain"></i> Wiki</a>
				</div>
			</div>
		</div>

		<hr/>

		<div className="row">
			<div className="col-md-7">
					<img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
			</div>
			<div className="col-md-5">
				<h2>Atlas</h2>
				<h4>Coming soon...</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
			</div>
		</div>

		<hr/>

		<div className="row">
			<div className="col-md-7">
					<img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
			</div>
			<div className="col-md-5">
				<h2>GHOST</h2>
				<h4>Coming soon...</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo, minima, inventore voluptatum saepe quos nostrum provident ex quisquam hic odio repellendus atque porro distinctio quae id laboriosam facilis dolorum.</p>
			</div>
		</div>
		</div>
	);
  }
}

Portfolio.defaultProps = propsObj;
export default Portfolio;