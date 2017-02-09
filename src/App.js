import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

console.log(`%c ________________________________________
< HIRE ME PLS! >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")

class App extends Component {

  render() {
	return (
	<div>
		<Header />
		<div className="container">
			<div className="row">
				{this.props.children}
			</div>
		</div>
		<Footer />
	</div>
	);
  }
}

export default App;