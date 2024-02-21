import React, { useEffect } from "react";
import { useState } from "react";
import './css/style.css'
import user from "./img/user-logo.png"

function AddEvent() {
    
    const [myCar, setMyCar] = useState("IT");
    
    const handleChange = (event) => {
        setMyCar(event.target.value)
    }
      
    
    const handleSubmit = (event) => {
        event.preventDefault();
        /*

        // Data before hashing
        // console.log(document.getElementById('username').value,document.getElementById('password').value);
        
        const user = sha256(document.getElementById('username').value).toString();
        
        // Data post hashing
        // console.log(user, password);

        const data = {
            username: user,
        };

        */
    };
    

    return (
        <html>
        <body className="align">
        <div className="grid">
            <form method="POST" className="lf form login" onSubmit={handleSubmit}>
                <img className="user" src={user} alt="User Logo" />
                <h3>Choose a subject</h3>
                <select value={myCar} onChange={handleChange}>
                    <option value="IT">IT</option>
                    <option value="Maths">Maths</option>
                    <option value="Sleep">Sleep</option>
                </select>

                <div className="form_field">
                    <button className="submitButton" type="submit">SUBMIT TO STUDENTS</button>
                </div>
            </form>
        </div>
        </body>
        </html>
    );
}

export default AddEvent;