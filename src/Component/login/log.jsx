import React, { useState, useEffect } from "react";
import axios from "axios";


import './log.css';
import Login from './login';
import Signup from './signup';

function Log() {
    useEffect(() => {
        const switchCtn = document.querySelector("#switch-cnt");
        const switchC1 = document.querySelector("#switch-c1");
        const switchC2 = document.querySelector("#switch-c2");
        const switchCircle = document.querySelectorAll(".switch__circle");
        const switchBtn = document.querySelectorAll(".switch-btn");
        const aContainer = document.querySelector("#a-container");
        const bContainer = document.querySelector("#b-container");
        const allButtons = document.querySelectorAll(".submit");

        const getButtons = (e) => e.preventDefault()

        const changeForm = (e) => {

            switchCtn.classList.add("is-gx");
            setTimeout(function () {
                switchCtn.classList.remove("is-gx");
            }, 1500)

            switchCtn.classList.toggle("is-txr");
            switchCircle[0].classList.toggle("is-txr");
            switchCircle[1].classList.toggle("is-txr");

            switchC1.classList.toggle("is-hidden");
            switchC2.classList.toggle("is-hidden");
            aContainer.classList.toggle("is-txl");
            bContainer.classList.toggle("is-txl");
            bContainer.classList.toggle("is-z200");
        }

        const mainF = (e) => {
            for (var i = 0; i < allButtons.length; i++)
                allButtons[i].addEventListener("click", getButtons);
            for (var i = 0; i < switchBtn.length; i++)
                switchBtn[i].addEventListener("click", changeForm)
        }

        window.addEventListener("load", mainF);


    });


    //validationSchema={validate}
    return (

        <div className="loggg">
            <div className="login-main">

                <div className="login-container login-b-container" id="b-container">
                    <Signup />
                </div>
                <div className="login-container login-a-container" id="a-container">
                    <Login />
                </div>
                <div className="switch" id="switch-cnt">
                    <div className="switch__circle"></div>
                    <div className="switch__circle switch__circle--t"></div>
                    <div className="switch__container" id="switch-c1">
                        <h2 className="switch__title titl">Welcome Back !</h2>
                        <p className="switch__description description">To keep connected with WeLegaL Law-Firm please login with your personal information.</p>
                        <button className="switch__button button switch-btn">Sign Up</button>
                    </div>
                    <div className="switch__container is-hidden" id="switch-c2">
                        <h2 className="switch__title titl">Hello Friend !</h2>
                        <p className="switch__description description">Enter your personal details and start journey with WeLegaL Law-Firm</p>
                        <button className="switch__button button switch-btn">Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Log;