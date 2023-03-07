
import React, { useState } from "react";
import "./login.css";
import { useHistory} from "react-router-dom";
export const Login = (props) => {
    const [name, setName] = useState('');
    const history = useHistory();
  
    const routeChange = () =>{ 
    let path = `/game`; 
    history.push(path);
  }
    return (
        <section className="colorack">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form >
                <label htmlFor="name">Name</label><br></br>
                <input value={name} onChange={(e) => setName(e.target.value)}type="Name" placeholder="Enter your name" id="name" name="name" />
                <br />
                <button type="submit" onClick={routeChange}>Log In</button>
                <br /><br /><br />
            </form>
        </div>
        </section>
    )
}