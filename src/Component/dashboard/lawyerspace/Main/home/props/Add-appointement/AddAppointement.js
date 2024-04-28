
import './add-appointement.css';
import { NavLink } from "react-router-dom";
import axios from "axios";

import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const AddAppointement = () => {
    const { id } = useParams();
    const [signupInput, setRegister] = useState({
        type: '',
        location: '',
        date: '',
        startat: '',
        
        error_list: [],

    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...signupInput, [e.target.name]: e.target.value });
    }
    const updateclient = (e) => {
        e.preventDefault();

        const data = {
  
            type: signupInput.type,
            location: signupInput.location,
            date: signupInput.date,
            startat: signupInput.startat,

        }




        axios.post(`http://127.0.0.1:8000/api/addapp/${id}`, data).then(res => {
            if (res.data.status === 200) {
                

                
            } else {
                setRegister({ ...signupInput, error_list: res.data.validation_errors });
            }
        });

    }

    return (
        <div>

            <section className="home-section">

                <div className="home-content">

                    <div className="sales-boxes sales-box-addapo">
                        <div className="recent-sales box">

                            <div className="page-content">
                                <div className="projects-section-header">
                                    <p>Add a new appointemet</p>
                                    <p className="time">
                                        {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                                    </p>
                                </div>
                                <form onSubmit={updateclient}>
                                    <div>
                                        <div className="add_app_container">
                                            <div className="adapocs_title">
                                                <label className='l_id'>Case ID</label>
                                                <label className='l_type'>Type</label>
                                                <label className='l_loc'>Location</label>
                                                <label className='l_date'>Date</label>
                                                <label className='l_time'>Starts At</label>
                                            </div>
                                            <div className="adapocs_field">
                                                <input type="text" className="input_apocs" value={id} name="case_id" readonly />
                                                <input type="text" className="input_apo" onChange={handleInput} value={signupInput.type} name="type" />
                                                <textarea type="text" className="input_apo textarea_ad" onChange={handleInput} value={signupInput.location} name="location" />
                                                <input type="date" className="input_apo datetime_in" onChange={handleInput} value={signupInput.date} name="date" />
                                                <input type="date" className="input_apo datetime_in" onChange={handleInput} value={signupInput.startat} name="startat" />
                                            </div>
                                        </div>
                                        <div className='add_case_btn'>
                                            <button className='add_btn cancel_b'><NavLink to="/dashboard/home" className="cancel_apo">Cancel</NavLink></button>
                                            <button className='add_btn reset_b'>Reset</button>
                                            <button className='add_btn save_b'>Save</button>
                                        </div>
                                    </div>
                                    </form>
                            </div>

                        </div>

                        <div className="top-sales box">
                            <div className="titl">Chat</div>
                            <div className="message-box">
                                <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                                <div className="message-content">
                                    <div className="message-header">
                                        <div className="name">Abdelilah Adriouich</div>

                                    </div>
                                    <p className="message-line">
                                        Hey, can tell me about progress of the case? I'm waiting for your response.
                                    </p>
                                    <p className="message-line time">
                                        Dec, 13
                                    </p>
                                </div>
                            </div>
                            <div className="message-box">
                                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                                <div className="message-content">
                                    <div className="message-header">
                                        <div className="name">Rachid Ennatiqi</div>

                                    </div>
                                    <p className="message-line">
                                        Awesome! 🤩 I like it. We can schedule a meeting for the next one.
                                    </p>
                                    <p className="message-line time">
                                        Dec, 12
                                    </p>
                                </div>
                            </div>
                            <div className="message-box">
                                <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                                <div className="message-content">
                                    <div className="message-header">
                                        <div className="name">Sana Bakrim</div>

                                    </div>
                                    <p className="message-line">
                                        Thanks for all the hard work !
                                    </p>
                                    <p className="message-line time">
                                        Dec, 11
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default AddAppointement