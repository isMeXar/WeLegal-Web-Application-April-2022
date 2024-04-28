import React, { useState } from 'react';
import './addcases.css';
import Fatneek from '../img/Fatneek-hover.jpg'
import Teach from '../img/teach-hover.jpg'
import Lisa from '../img/leena-hover.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Addcases() {

    
    const token = localStorage.getItem('auth_email');
    const [signupInput, setRegister] = useState({
        title: '',
        description: '',
        area: '',
        lawyer: '',
        file: '',
        error_list: [],

    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...signupInput, [e.target.name]: e.target.value });
    }
    const updateclient = (e) => {
        e.preventDefault();

        const data = {
            title: signupInput.title,
            description: signupInput.description,
            area: signupInput.area,
            lawyer: signupInput.lawyer,
            file: signupInput.file,
        }




        axios.post(`http://127.0.0.1:8000/api/addcases/${token}`, data).then(res => {
            if (res.data.status === 200) {
                console.log('hi');
            } else {
                setRegister({ ...signupInput, error_list: res.data.validation_errors });
            }
        });

    }
    return (

        <section className="home-section">

            <div className="home-content">

                <div className="sales-boxes addcase_box">
                    <div className="recent-sales box">

                        <div className="page-content">
                            <div className="projects-section-header">
                                <p>New Case</p>
                                <p className="time">
                                    {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                                </p>
                            </div>
                            <form onSubmit={updateclient}>
                                <div className="addcase_form">
                                    <div className='add_form'>
                                        <div className='add_flex'>
                                            <div className='inp_name'>
                                                <label htmlFor="title_inp" className='t'>Title</label>
                                                <label htmlFor="describe_inp" className='t des'>Description</label>
                                                <label htmlFor="area_form" className='t ar'>Practice Area</label>
                                            </div>
                                            <div className='inp_field'>
                                                <input id="title_inp" type="text" onChange={handleInput} value={signupInput.title} name="title" className='field' />
                                                <textarea id="describe_inp" type="text" onChange={handleInput} value={signupInput.description} name="description" className='field' />
                                                <select name="area" onChange={handleInput} value={signupInput.area} id="area_form" className='field'>
                                                    <option>select your area</option>
                                                    <option  >Personal Injury</option>
                                                    <option >Family Law</option>
                                                    <option >Criminal Defense</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='fl_la'>
                                            <p className='t'>Choose Your Lawyer</p>
                                            <div className='lawyer_rad'>
                                                {/* <div className="label-wrapper">
                                                    <input className="rad" name="lawyer_radio" type="radio" id="optl-1" />
                                                    <label onChange={handleInput} value={signupInput.lawyer = 1} className="category pic_fl" htmlFor="optl-1">
                                                        <img src={Fatneek} className="add_img" />
                                                        <p>Fatneek Jr Will</p>
                                                    </label>
                                                </div>
                                                <div className="label-wrapper">
                                                    <input className="rad" name="lawyer_radio" type="radio" id="optl-2" />
                                                    <label onChange={handleInput} value={signupInput.lawyer} className="category pic_fl" htmlFor="optl-2">
                                                        <img src={Teach} className="add_img" />
                                                        <p>Marchell D Teach</p>
                                                    </label>
                                                </div>
                                                <div className="label-wrapper">
                                                    <input className="rad" name="lawyer_radio" type="radio" id="optl-3" />
                                                    <label onChange={handleInput} value={signupInput.lawyer} className="category pic_fl" htmlFor="optl-3">
                                                        <img src={Lisa} className="add_img" />
                                                        <p>Lisa Isirabi</p>
                                                    </label>
                                                </div> */}
                                                <select name="lawyer" onChange={handleInput} value={signupInput.lawyer} id="area_form" className='field'>
                                                    <option>select your lawyer</option>
                                                    <option  >Fatnnek Jr Will</option>
                                                    <option >Marchell D Teach</option>
                                                    <option >Lisa Isaribi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='doc_fl'>
                                            <p>Important Documents</p>
                                             <div className='doc_fl_r'>
                                                <input type="file" onChange={handleInput} value={signupInput.file}  id="myfile" name="file" />
                                                <button className='add_doc'><AiOutlinePlus className='add_doc_icon' /></button>
                                            </div> 
                                          
                                        </div>
                                    </div>
                                    <div className='add_case_btn'>
                                        <button className='add_btn cancel_b'>Cancel</button>
                                        <button className='add_btn reset_b'>Reset</button>
                                        <button className='add_btn save_b'>Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    < div className="top-sales box" >
                        <div className="titl">Chat</div>
                        <div className="message-box">
                            <img src={Fatneek} alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Fatneek Jr Wil</div>

                                </div>
                                <p className="message-line">
                                    I scheduled a new meeting! Check the aointement page for more information.
                                </p>
                                <p className="message-line time">
                                    April, 02
                                </p>
                            </div>
                        </div>
                        <div className="message-box">
                            <img src={Lisa} alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Lisa Isaribi</div>

                                </div>
                                <p className="message-line">
                                    We are done here! Let's Stay in touch.
                                </p>
                                <p className="message-line time">
                                    January, 21
                                </p>
                            </div>
                        </div>


                    </div >
                </div>
            </div>
        </section>

    )
}

export default Addcases 