import React, { Component } from 'react';
import Messages from "../messages/Messages";
import Input from '../input/Input';

import "./Chat.css";

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    
  }

  componentDidMount() {

    console.log(this.props.drone, this.props.member)
    const room = this.props.drone.subscribe("observable-chat-app");  

    room.on('data', (text, member) => {
      console.log('Received data:', text, member);

      const messages = [...this.state.messages];
      messages.push({member, text: text});
      this.setState({messages});
    });

  }

  onSendMessage = (message) => {
    this.props.drone.publish({
      room: "observable-chat-app",
      message
    });
  }


  


  render() {
    return (
      <div className="chat">
        <div className="chat-header">
          <h1>My Chat App</h1>
        </div>
        <Messages 
        messages = {this.state.messages}
        currentMember = {this.props.member}
        />
    <Input
      onSendMessage={this.onSendMessage}
     />
      </div>
    );
  }
}

export default Chat;
