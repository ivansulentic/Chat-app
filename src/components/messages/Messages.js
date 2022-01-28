
import React from "react";

import "./Messages.css";

function Messages(props) {
    const renderMessage = (message, index) => {
        const {member, text} = message;

        console.log("messeges", member)
        const messageFromMe = member.id === props.currentMember.id;
        const className = messageFromMe ? "messages-message currentMember" : "messages-message";
        return (
            <li className={className} key = {index}>
            <span className="avatar">{member.clientData.avatar}</span>
            <div className="message-content">
                <div className="username">
                  {member.clientData.username}
                </div>
                <div className="text">{text}</div>
              </div>
            </li>
          );
    }
  return( 
 
      <ul className="messages-list">
        {props.messages.map((m,i)=> renderMessage(m,i))}
      </ul>
  );
}




export default Messages;