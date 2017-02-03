import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Header from './components/Header'

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
	</div>
	);
  }
}

export default App;