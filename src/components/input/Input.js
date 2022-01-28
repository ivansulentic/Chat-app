import React, { useState } from "react";

function Input(props) {
   const [message, setMessage] = useState(''); 
   const onChange = (e) => {
    setMessage(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

   
    onSendMessage(message);
    setMessage('');
  }

  const onSendMessage = (message) => {
    props.drone.publish({
      room: "observable-chat-app",
      message
    });
  }

  return( 
    <form onSubmit={e => onSubmit(e)}>
      <input
        onChange={e => onChange(e)}
        value={message}
        type="text"
        placeholder="Enter your message and press ENTER"
        
      />
      <button type='submit'>Send</button>
    </form>
  )
  
  
}




export default Input;