
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
              style={{backgroundColor: member.color}}
            />
            <div className="message-content">
                <div className="username">
                  {member.username}
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