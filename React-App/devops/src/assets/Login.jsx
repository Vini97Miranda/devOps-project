import React, { useState, useEffect } from "react";
import './css/style.css'
import user from "./img/user-logo.png"
import {createDirectus, authentication, rest, login, readMe, readUsers, readRole} from '@directus/sdk';


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

    const [users, setUsers] = useState([]);
    const [body2, setBody2] = useState(null);

    async function fetchUsers() {
        try {
            const response = await fetch("http://localhost:8055/users", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer zbqmUzD-H30NY3WX3jdyhSAMT1qU4lNs'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setBody2(data);

            } else {
                console.error('Erreur lors de la récupération des utilisateurs:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error.message);
        }
    }
    async function login() {
        const client = createDirectus('http://localhost:8055').with(authentication('json')).with(rest());
        const result = await client.login(email, password);
        const user = await client.request(readMe(""));
        const roles = await client.request(readRole(user.role));


   }
    async function createUser() {
        const res = await fetch(`http://localhost:8055/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh_token: "refresh_token_string",
                mode: "refresh_mode"
            })
        })
        const data = await res.json();
        setBody(data);

        /*
              fetch(`http://localhost:8055/users?access_token=${body.data.access_token}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      email: 'salut@salut.fr',
                      password: 'test'
                  })
              })*/
    }
    useEffect(() => {
        togglePasswordVisibility();
    }, []);

    return (
        <body className="align">
        <div className="grid">
            <form className="lf form login" onSubmit={(e) => {
                e.preventDefault();
                login();
            }}>
                <img className="user" src={user} alt="User Logo"/>
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-user" style={{color: '#606468'}}></i></label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="username"
                           id="username" className="form_input" placeholder="USERNAME" required/>
                </div>
                <div className="form_field">
                    <label className="label-form"><i className="fas fa-lock" style={{color: '#606468'}}></i></label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" id="password"
                           name="password" className="form_input" placeholder="PASSWORD" required/>
                    <i className="fas fa-eye eye-icon" onClick={togglePasswordVisibility}></i>
                </div>
                <div className="container">
                    <input type="checkbox" id="rememberMeCheckbox"/>
                    <label className="label-checkbox" htmlFor="rememberMeCheckbox">Remember Me</label>
                    <a href="./change-password"><p className="forgot-password">Forgot your password ?</p></a>
                </div>
                <div className="form_field">
                    <button type="submit" className="submitButton">LOGIN</button>
                    <button type="button" className="submitButton" onClick={createUser}>Create</button>
                </div>
                <button type="button" className="submitButton" onClick={fetchUsers}>User</button>
                <div>{body ? JSON.stringify(body) : 'RIEN'}</div>
                <div>{body2 ? JSON.stringify(body) : 'RIEN2'}</div>

            </form>
        </div>
        </body>
    );
}

export default Login;
