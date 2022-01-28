import React, { useState } from "react";
import './Login.css';
function Login(props) {

  return( 
    <div className = 'login'>
        <div className= "form-wrapper">
            <div className="username">
                 <label>
                     Username:
                 </label>
            </div>
            <div className="input">
                <input value = {props.username}
                onChange={props.changeUsername}
                placeholder="Enter your username"
             />
             </div>
                <div className="avatar">
                    <label>
                         Select avatar:   
                    </label><br/>
                    <div className="select">
                    <select className="avatar-select" onChange={props.changeAvatar}>
                        <option value = '👨'>
                                🧑
                        </option>
                        <option value = '👩'>
                                👩
                        </option>
                        <option value = '👱‍♂️'>
                                👱‍♂️
                        </option>
                    </select>
                    </div>
                </div>
                <br/>
            <div className="button">
                <button className="btn" onClick = {props.onLogin}>Login</button> 
            </div> 
        </div>  
    </div>
  )
    
}




export default Login;
