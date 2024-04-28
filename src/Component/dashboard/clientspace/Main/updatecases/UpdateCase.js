import React from 'react';
import './updatecase.css';


import Fatneek from '../img/Fatneek-hover.jpg'
import Teach from '../img/teach-hover.jpg'
import Lisa from '../img/leena-hover.jpg'


import {
    NavLink
} from "react-router-dom";

const UpdateCase = () => {

    return (
        <div>
            <section className="home-section">

                <div className="home-content">

                    <div className="sales-boxes addcase_box">
                        <div className="recent-sales box">

                            <div className="page-content">
                                <div className="projects-section-header">
                                    <p>Update Case Information</p>
                                    <p className="time">
                                        {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                                    </p>
                                </div>

                                <div className="addcase_form">
                                    <div className='add_form'>
                                        <div className='add_flex'>
                                            <div className='inp_name'>
                                                <label for="title_inp" className='t'>Title</label>
                                                <label for="describe_inp" className='t des'>Description</label>
                                            </div>
                                            <div className='inp_field'>
                                                <input id="title_inp" type="text" value="" name="case_title" className='field' />
                                                <textarea id="describe_inp" type="text" value="" name="case_description" className='field' />
                                            </div>
                                        </div>

                                        <div className='evid_container'>
                                            <p>Add Some Evidences</p>
                                            <div className='doc_fl'>
                                                <div className='doc_fl_r'>
                                                    <p>1 -</p>
                                                    <input type="file" className='file_inp' id="myfile" name="doc_1" />
                                                </div>
                                                <input className="describe_evid" name="doc_description1" value="" placeholder='File Description' type="text" />
                                            </div>
                                            <div className='doc_fl'>
                                                <div className='doc_fl_r'>
                                                    <p>2 -</p>
                                                    <input type="file" className='file_inp' id="myfile" name="doc_2" />
                                                </div>
                                                <input className="describe_evid" name="doc_description2" value="" placeholder='File Description' type="text" />
                                            </div>
                                            <div className='doc_fl'>
                                                <div className='doc_fl_r'>
                                                    <p>3 -</p>
                                                    <input type="file" className='file_inp' id="myfile" name="doc_3" />
                                                </div>
                                                <input className="describe_evid" name="doc_description3" value="" placeholder='File Description' type="text" />
                                            </div>
                                            <div className='doc_fl'>
                                                <div className='doc_fl_r'>
                                                    <p>4 -</p>
                                                    <input type="file" className='file_inp' id="myfile" name="doc_4" />
                                                </div>
                                                <input className="describe_evid" name="doc_description4" value="" placeholder='File Description' type="text" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='add_case_btn'>
                                        <button className='add_btn cancel_b'><NavLink to="/dashboard/home" className="cancel_apo">Cancel</NavLink></button>
                                        <button className='add_btn reset_b'>Reset</button>
                                        <button className='add_btn save_b'>Update</button>
                                    </div>
                                </div>
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
        </div>
    )
}

export default UpdateCase 