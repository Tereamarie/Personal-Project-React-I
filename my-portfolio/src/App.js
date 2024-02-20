import React, { Component } from 'react';
import Hello from './components/Hello.js'
import './App.css';
import { render } from 'react-dom';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Hello/>
			</React.Fragment>
		);
	}
}

export default App;
