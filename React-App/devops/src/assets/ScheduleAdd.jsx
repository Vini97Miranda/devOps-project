import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
//import './css/style.css'
import user from "./img/user-logo.png"

function AddEvent() {
    
    const [subject, setSubject] = useState("IT");
    const [textarea, setTextarea] = useState(
        "Sample text"
      );
    
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [time, setTime] = useState("12:00");

    const TimeInput = ({time}) => (
        <input
          value={time}
          onChange={(e) => handleChange(e.target.value)}
          style={{ border: "solid 1px pink" }}
        />
      );
      
    const handleChange = (event) => {
        setSubject(event.target.value)
        setTextarea(event.target.value)
        setTime(event.target.value)
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
                <select value={subject} onChange={handleChange}>
                    <option value="IT">IT</option>
                    <option value="Maths">Maths</option>
                    <option value="Sleep">Sleep</option>
                </select>
                <h3>Description of the task</h3>
                <textarea value={textarea} onChange={handleChange} />
                <h3>Dates of the task</h3>
                <DatePicker 
                    //showIcon
                    toggleCalendarOnIconClick
                    //showTimeInput
                    customTimeInput={<TimeInput />}
                    selected={startDate}
                    monthsShown={1}
                    isClearable={true}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    holidays={[
                        { date: "2024-08-15", holidayName: "India's Independence Day" },
                        { date: "2024-12-31", holidayName: "New Year's Eve" },
                        { date: "2024-12-25", holidayName: "Christmas" },
                        { date: "2024-01-01", holidayName: "New Year's Day" },
                        { date: "2024-11-23", holidayName: "Thanksgiving Day" },
                        { date: "2024-12-25", holidayName: "Fake holiday" },
                        { date: "2024-03-17", holidayName: "St-Patrick" },
                    ]}
                    placeholderText="Input dates for the assignement" />
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