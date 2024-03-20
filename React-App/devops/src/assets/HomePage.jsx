import React, { useEffect } from 'react';
import './css/global.css';
import f32 from "./img/favicon-32x32.png";
import cal from "./img/calendar.jpg";

function adminPermission(token = 2) {
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
    if (token === 1) {
        addCSS(".teacher { display: block; }");
        addCSS(".topnav.responsive a.teacher { display: block; }");
    } else if (token === 2) {
        addCSS(".developer { display: block; }");
        addCSS(".topnav.responsive a.developer { display: block; }");
    } else {
        addCSS(".developer { display: none; }");
    }
}

function hamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function HomePage() {

    useEffect(() => {
        adminPermission(2)
    }, []);
    return (
        <div className="body">
            <nav className="menu-container navbar">
                <div className="topnav" id="myTopnav">
                    <img src={f32} alt="logo"/>
                    <a className="init" href="#home">Home</a>
                    <a className="developer" href="./dev-page">Admin</a>
                    <a className="init" href="#contact">Contact</a>
                    <a className="init" href="#about">About</a>
                    <a className="init" href="./calendar">Calendar</a>
                    <a className="init" href="./SubmitStu">Submit an assignement</a>
                </div>
            </nav>
            <header className="cols-2-half theme-dark">
                <div className="col-2 col-text">
                    <h1 className="slide-right">Welcome to Dorset Booking</h1>
                    <h2 className="slide-right">Student and Teacher calendar</h2>
                    <div className="container-btn slide-right">
                        <a href="/login" className="btn btn-outline btn-soft">
                            <span>Login</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-2 col-visual desktop-bleed-all">
                    <figure>
                        <img className="slide-tr" src={cal} alt="Placeholder image"/>
                    </figure>
                </div>
            </header>
            <main>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </main>
            <footer className="footer-0 text-center-desktop text-center-mobile theme-dark" id="contact">
                <h2>Dorset Calendar</h2>
                <h3>Awesome and afforadble calendar</h3>
                <ul className="footer-links footer-links-uppercase">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="https://dorset.ie/">Dorset College</a></li>
                </ul>
                <div className="copyright">
                    <p>Copyright © 2023 ABC Limited. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;
