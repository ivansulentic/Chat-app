import React, { useState } from "react";
import "./Input.css";

function Input(props) {
   const [message, setMessage] = useState(''); 
   
   const onChange = (e) => {
    setMessage(e.target.value);
  }

  const onSubmit = (e) => {

    e.preventDefault();

   
    props.onSendMessage(message);
    setMessage('');
  }

  const alertMessage = (e) => {
    e.preventDefault();
    alert("This message is empty");
  }

  return( 
    <form onSubmit={e => onSubmit(e)}>
      <input
        onChange={e => onChange(e)}
        value={message}
        type="text"
        placeholder="Enter your message and press ENTER"
        
      />
      <button type='button'onClick={e => alertMessage(e)} >Send</button>
    </form>
  )
  
  
}




export default Input;