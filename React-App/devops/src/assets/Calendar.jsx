import React from 'react';
import './css/calendar.css';

function Calendar() {
    let date = new Date();
    let day = date.getDate();
    let monthInt = date.getMonth();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[monthInt];
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let days = [];

    let firstDayOfMonth = new Date(date.getFullYear(), monthInt, 1);
    let offset = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    for(let i = 1; i<offset; i++){
        days.push(0);
    }
    for(let i = 1; i <32; i++){
        days.push(i);
    }





    return (
        <div className='container'>
            <h1 className='mois'>{month}</h1>
            <div className='grille'>
                {week.map((item)=>(

                    <p className='jourSemaine'>{item}</p>

                ))}
                {days.map((item)=>(

                    item == 0 && <div className='caseJour' style={{
                        visibility: "hidden"}}></div> ||
                    item == day && <div className='caseJour' style={{color: "red"}}>{item}</div> ||
                    <div className='caseJour'>{item}</div>

                ))
                }
            </div>
        </div>
    );
}

export default Calendar;