import React, { useEffect } from "react";
import sha256 from "crypto-js/sha256";
import './css/style.css'
import user from "./img/user-logo.png"

function Login() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
    }, [])

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Data before hashing
        // console.log(document.getElementById('username').value,document.getElementById('password').value);
        
        const user = document.getElementById('username').value.toString();
        const password = sha256(document.getElementById('password').value).toString();
        const rememberMe = document.getElementById('rememberMeCheckbox').checked;

        const data = {
            username: user,
            password: password,
            bool: rememberMe
        };
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            console.log("burp");
            const responseData = await fetch('http://localhost:8000/login_get', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (responseData.ok) {
                const data = await responseData.json();
                if (data.message == "1")
                {
                    console.log('Login successful');
                    window.location.href = "/schedule-add";
                }
                else
                {
                    if (data.message == "2")
                    {
                        console.log('Login successful');
                        window.location.href = "/calendar";
                    }
                    else
                    {
                        console.error('Login failed');
                    }
                }

            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    useEffect(() => {
        togglePasswordVisibility();
    }, []);

    return (
        <body className="align">
        <div className="grid">
            <form method="POST" className="lf form login" onSubmit={handleSubmit}>
                <img className="user" src={user} alt="User Logo" />
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-user" style={{ color: '#606468' }}></i></label>
                    <input type="text" name="username" id="username" className="form_input" placeholder="USERNAME" required />
                </div>
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-lock" style={{ color: '#606468' }}></i></label>
                    <input type="password" id="password" name="password" className="form_input" placeholder="PASSWORD" required />
                    <i className="fas fa-eye eye-icon" onClick={togglePasswordVisibility}></i>
                </div>
                <div className="container">
                    <input type="checkbox" id="rememberMeCheckbox" />
                    <label className="label-checkbox" htmlFor="rememberMeCheckbox">Remember Me</label>
                    <a href="./change-password"><p className="forgot-password">Forgot your password ?</p></a>
                </div>
                <div className="form_field">
                    <button className="submitButton" type="submit">LOGIN</button>
                </div>
            </form>
        </div>
        </body>
    );
}

export default Login;
