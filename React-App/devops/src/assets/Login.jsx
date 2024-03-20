import React, { useState, useEffect } from "react";
import './css/style.css'
import user from "./img/user-logo.png"



function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [body, setBody] = useState(null);


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
    }, []);


    const togglePasswordVisibility = () => {
        const passwordField = document.getElementById("password");
        const eyeIcon = document.querySelector(".eye-icon");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    };

    async function login() {
        const res = await fetch('http://localhost:8055/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
        const data = await res.json();
        setBody(data);
    }

    function createUser() {
        fetch(`http://localhost:8055/users?access_token=Eb9Z-RyeWQdPvEFzGSPy26TYPt8rQm4O`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
    }
    useEffect(() => {
        togglePasswordVisibility();
    }, []);

    return (
        <body className="align">
        <div className="grid">
            <form className="lf form login">
                <img className="user" src={user} alt="User Logo" />
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-user" style={{ color: '#606468' }}></i></label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="username" id="username" className="form_input" placeholder="USERNAME" required  />
                </div>
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-lock" style={{ color: '#606468' }}></i></label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" id="password" name="password" className="form_input" placeholder="PASSWORD" required />
                    <i className="fas fa-eye eye-icon" onClick={togglePasswordVisibility}></i>
                </div>
                <div className="container">
                    <input type="checkbox" id="rememberMeCheckbox" />
                    <label className="label-checkbox" htmlFor="rememberMeCheckbox">Remember Me</label>
                    <a href="./change-password"><p className="forgot-password">Forgot your password ?</p></a>
                </div>
                <div className="form_field">
                    <button className="submitButton" onSubmit={login}>LOGIN</button>
                    <button className="submitButton" onSubmit={createUser}>Create</button>
                </div>
                <div>{body ? JSON.stringify(body) : 'RIEN'}</div>

            </form>
        </div>
        </body>
    );
}

export default Login;
