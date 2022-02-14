import React, { Component } from 'react';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedin: false,
			username: "", 
			avatar: '👨',
			drone: null,
			member: ''
		}
	}

	
	onChangeUsername = (e) => {
		this.setState({username: e.target.value});
	  }
	
	onChangeAvatar= (e) => {
		this.setState({avatar: e.target.value});
	}

	onLogin = () => {
		if (this.state.username) {
			const drone = new window.Scaledrone('nUOTHJBpK0EtRvLz', {
			  data: { username: this.state.username, avatar: this.state.avatar },
			});

			console.log(drone);
			drone.on("open", (error) => {
				if(error) {
					return console.error(error);
				}

				this.setState({
					drone: drone, 
					member: {
						id: drone.clientId, 
						username: this.state.username, 
						avatar: this.state.avatar
					}, 
					loggedin: true
				});
			});	
		}
	  }
	render() {
		return (
			// 
			this.state.loggedin 
				? <Chat 
					drone = {this.state.drone}
					member = {this.state.member}
				/>
				: <Login 
					username = {this.state.username}
					avatar = {this.state.avatar}
					changeUsername = {this.onChangeUsername}
					changeAvatar = {this.onChangeAvatar}
					onLogin = {this.onLogin}
				/>
		);
	}
}

export default App;
