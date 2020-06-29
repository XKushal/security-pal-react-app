import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Jobs from './Components/Jobs';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render(){
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={About}/>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/careers" component={Jobs}/>
				</Switch>
				
			</div>
		);
	}
}

export default App;
