
import React from "react";

function Messages(props) {
    const renderMessage = (message, index) => {
        const {member, text} = message;
        const messageFromMe = member.id === props.currentMember.id;
        const className = messageFromMe ? "messages-message currentMember" : "messages-message";
        return (
            <li className={className} key = {index}>
            <span
              className="avatar"
              style={{backgroundColor: member.clientData.color}}
            />
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
        {props.messages.map(m => renderMessage(m))}
      </ul>
  );
}




export default Messages;