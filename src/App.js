import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {

  render() {
	return (
	<div>
		<Header />
		<Grid>
			<Row>
				{this.props.children}
			</Row>
		</Grid>
		<Footer />
	</div>
	);
  }
}

export default App;