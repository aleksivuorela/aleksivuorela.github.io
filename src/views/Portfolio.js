import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

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
      <div className="col-md-6">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/2pQMaOMpoz8" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <h2>Feeder</h2>
            <div className="tag-list">
              <span className="label label-default tag col-xs-3">JavaScript</span>
              <span className="label label-default tag col-xs-3">Node.js</span>
              <span className="label label-default tag col-xs-3">Express.js</span>
              <span className="label label-default tag col-xs-3">React.js</span>
              <span className="label label-default tag col-xs-3">AWS</span>
              <span className="label label-default tag col-xs-3">Raspberry Pi</span>
            </div>
          </div>
          <div className="row">
            <p>We built IoT stack for collecting, storing and visualizing time-series data as a team of five. Our employer was Digia. My role in the project was building front- and backend for the application. The application can display data from the device and also send data to the device, so the communication through AWS cloud is two-way.</p>
            <p>I built the frontend with React.js for the first time. For that I also studied Webpack, ES6 and Babel. The backend (API) I built with Node.js & Express.js. I also dabbled with some AWS stuff:</p>
            <div style={{ marginTop: '-15px', marginBottom: '20px' }}>
              <ul style={{ margin: '10px 0 0 0' }}>
                <li>sending data from application to device and vice versa with AWS IoT SDK</li> 
                <li>set up CI/CD pipeline with AWS CodePipeline, Github, AWS CodeBuild and AWS CodeDeploy</li>
                <li>bash scripts to setup/start Node.js automatically on EC2 instance</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="tag-list">
              <a target='_blank' href="https://github.com/DigiaMinions/Project"><i className="devicon-github-plain"></i> Source</a>
              <a target='_blank' href="https://github.com/DigiaMinions/Project/wiki"><i className="devicon-github-plain"></i> Wiki</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col-md-6">
        <Image src={require('../assets/images/atlas_01.png')} responsive/>
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <h2>Atlas</h2>
            <div className="tag-list">
              <span className="label label-default tag col-xs-3">C#</span>
              <span className="label label-default tag col-xs-3">.NET</span>
              <span className="label label-default tag col-xs-3">ASP.NET</span>
              <span className="label label-default tag col-xs-3">MySQL</span>
              <span className="label label-default tag col-xs-3">JavaScript</span>
            </div>
          </div>
          <div className="row">
            <p>Atlas is a project management tool built with ASP.NET. With Atlas you can log and visualize working hours for projects. Working hours can be viewed as simple pie charts or more detailed GANTT charts. Projects have role-based management with authentication and authorization.</p>
            <p>Each project also has support for creating markdown documentation and the project's latest commits and other information is pulled from the repo through Github API.</p>
          </div>
          <div className="row">
            <div className="tag-list">
              <a target='_blank' href="https://github.com/AtlasCorporation/ProjectManagementTool/"><i className="devicon-github-plain"></i> Source</a>
              <a target='_blank' href="https://github.com/AtlasCorporation/ProjectManagementTool/wiki/Loppudokumentaatio"><i className="devicon-github-plain"></i> Wiki</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col-md-6">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Cs2nQ1UhA5Q" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <h2>Turbo Nurse</h2>
            <div className="tag-list">
              <span className="label label-default tag col-xs-3">C#</span>
              <span className="label label-default tag col-xs-3">Unity</span>
            </div>
          </div>
          <div className="row">
            <p>I was programming Turbo Nurse game at JAMK's Challenge Factory 2016. Turbo Nurse is an education-centric game for healthcare students. It teaches the player the everyday duties of a nurse in a humorous and entertaining manner. The project was brought to the finish line with very limited resources, as it was completed in a mere two and a half months, by a team of four people.</p>
          </div>
          <div className="row">
            <div className="tag-list">
              <a target='_blank' href="https://github.com/JAMK-IT/cf-game"><i className="devicon-github-plain"></i> Source</a>
              <a target='_blank' href="https://github.com/JAMK-IT/cf-game/wiki"><i className="devicon-github-plain"></i> Wiki</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col-md-6">
        <Image src={require('../assets/images/nodejs.jpg')} responsive/>				
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <h2>Node.js Multiplayer</h2>
            <div className="tag-list">
              <span className="label label-default tag col-xs-3">JavaScript</span>
              <span className="label label-default tag col-xs-3">Node.js</span>
              <span className="label label-default tag col-xs-3">Express.js</span>
              <span className="label label-default tag col-xs-3">Socket.IO</span>
              <span className="label label-default tag col-xs-3">MongoDB</span>
            </div>
          </div>
          <div className="row">
            <p>Real-time multiplayer game that I built myself to learn Node.js/Express.js and WebSockets (Socket.IO). Had a lot of fun making it and actually ended up reading a whole book on JavaScript while doing so. The game also has real-time chat, login-system and highscores!</p>
          </div>
          <div className="row">
            <div className="tag-list">
              <a target='_blank' href="https://github.com/aleksivuorela/NodeJS-Multiplayer"><i className="devicon-github-plain"></i> Source</a>
              <a target='_blank' href="https://github.com/aleksivuorela/NodeJS-Multiplayer/wiki"><i className="devicon-github-plain"></i> Wiki</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col-md-6">
        <div className="embed-responsive embed-responsive-4by3">
          <video controls>
            <source src={require('../assets/images/ghost.mp4')} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <h2>GHOST</h2>
            <div className="tag-list">
              <span className="label label-default tag col-xs-3">C++</span>
              <span className="label label-default tag col-xs-3">SDL</span>
            </div>
          </div>
          <div className="row">
            <p>Tile-based shooter game in C++ using SDL. I created my own 2D game engine from scratch with SDL library. I also created simple AI with finite-state machine, Bresenham's line algorithm and A* search algorithm.</p>
          </div>
          <div className="row">
            <div className="tag-list">
              <a target='_blank' href="https://github.com/aleksivuorela/GHOST"><i className="devicon-github-plain"></i> Source</a>
              <a target='_blank' href="http://student.labranet.jamk.fi/%7EH8346/cpp/harkkatyo/olio2harjoitustyo.html"><span className="glyphicon glyphicon-book"></span> Game Doc</a>
              <a target='_blank' href="http://student.labranet.jamk.fi/~H8346/cpp/harkkatyo/liitteet/AI.pdf"><span className="glyphicon glyphicon-book"></span> AI Doc</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  }
}

export default Portfolio;