import React from "react";
import './css/grades.css';
import { } from "mobiscroll-react"; 

const infos = [["DevOps", "A"], ["Web Development", "A"], ["Data Structures", "A"], ["Algorithms", "A"], ["Database Management", "A"], ["Software Engineering", "A"], ["Operating Systems", "A"], ["Computer Networks", "A"], ["Computer Architecture", "A"], ["Discrete Mathematics", "A"]];
const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];


function Grades() {    
        var i = 0;    
    
    return (
        <html>
        <body style={{background:"#161641",fontSize:30,align:"center"}}>
            <h1></h1>
            <h3 style={{color:"#FFFFFF",align:"center"}}>Course I am taking  <span style={{color:"#EDF108",padding:550}}>Grade</span></h3>
            <div style={{color:"#ffffff"}}>------------------------------------------------------------------------------------------------------</div>
            <div>
            {infos.map((item) => (
                <div> 
                    <div style={{color:"#ffffff"}}><div className=".square" style={{backgroundcolor:colors[i++],height: 50,
    width: 50}}></div>
                       {item[0]}<span style={{padding:550,align:"left"}}>{item[1]}</span></div>
                <div style={{color:"#ffffff"}}>------------------------------------------------------------------------------------------------------</div>
                </div>
            ))}
            </div>  
        </body>
        </html>
    );
}

export default Grades;