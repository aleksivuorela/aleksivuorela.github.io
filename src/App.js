import React, { Component } from 'react';
import { Grid, Navbar, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>ALEKSI VUORELA</h1>
        Software Engineering Student
        <hr />
        <div className="contact">
          <ul>
            <li><a href="https://www.linkedin.com/in/aleksivuorela"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/aleksivuorela"><i className="fa fa-github fa-3x"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;