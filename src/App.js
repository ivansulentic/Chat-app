import React, { Component } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedin: false,
			username: "", 
			color: '#ff0000',
			drone: null,
			member: ''
		}
	}

	onChangeUsername = (e) => {
		this.setState({username: e.target.value});
	  }
	
	onChangeColor = (e) => {
		this.setState({color: e.target.value});
	}

	onLogin = () => {
		if (this.state.username) {
			const drone = new window.Scaledrone('nUOTHJBpK0EtRvLz', {
			  data: { username: this.state.username, color: this.state.color },
			});
			drone.on("open", (error) => {
				if(error) {
					return console.error(error);
				}

				this.setState({
					drone: drone,
					member: {
						id: drone.clientId, 
						username: this.state.username, 
						color: this.state.color
					},
					loggedin: true
				});
			});
	
		}
	  }

	render() {
		return (
			this.state.loggedin 
				? <Chat />
				: <Login 
					username = {this.state.username}
					color = {this.state.color}
					changeUsername = {this.onChangeUsername}
					changeColor = {this.onChangeColor}
					onLogin = {this.onLogin}
				/>
		);
	}
}

export default App;
