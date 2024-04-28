
import './UpdateCase.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function UpdateCase() {
    const { id } = useParams();
    const [clients, setClient] = useState({})
    useEffect(() => {
        axios.get(`api/showcs/${id}`).then(res => {
            if (res.data.status === 200) {
                setClient(res.data.client);
                setRegister(res.data.client);

            }
            else if (res.data.status === 404) {
                alert("error", res.data.message)

            }

        })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const [parameterInput, setRegister] = useState({
        status: '',
        area: '',
        description: '',
        title: '',
        result: '',
        error_list: [],

    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...parameterInput, [e.target.name]: e.target.value });
    }
    const updateclient = (e) => {
        e.preventDefault();

        const data = {
            status: parameterInput.status,
            description: parameterInput.description,
            title: parameterInput.title,
            area: parameterInput.area,
            result: parameterInput.result,


        }




        axios.post(`http://127.0.0.1:8000/api/updatecase/${id}`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_username', res.data.username);

                console.log(res.data.client);
            } else {
                setRegister({ ...parameterInput, error_list: res.data.validation_errors });
            }
        });

    }

    return (
        <div>

            <section className="home-section">

                <div className="home-content">

                    <div className="sales-boxes sales-box-upcase">
                        <div className="recent-sales box recent_upcase">

                            <div className="page-content">
                                <div className="projects-section-header">
                                    <p>Update Case</p>
                                    <p className="time">
                                        {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                                    </p>
                                </div>
                                <form onSubmit={updateclient}>
                                    <div>
                                        <div className="add_app_container">
                                            <div className="adapocs_title">
                                                <label className='l_id'>Case ID</label>
                                                <label className='l_case_n'>Case Number</label>
                                                <label className='l_client'>Client</label>
                                                <label className='l_title'>Title</label>
                                                <label className='l_area'>Practice Area</label>
                                                <label className='l_descr'>description</label>
                                                <label className='l_status'>Status</label>
                                                <label className='l_res'>Result</label>
                                                {/*  <label className='l_docs'>Important Documents</label> */}
                                            </div>
                                            <div className="adapocs_field">
                                                <input type="text" className="input_apocs" value={id} name="case_id" readonly />
                                                <input type="text"/*  onChange={handleInput} value={parameterInput.area} */ className="input_apo" name="case_number" />
                                                <input type="text" className="input_apo"  name="client" readonly />
                                                <input type="text" onChange={handleInput} value={parameterInput.title} className="input_apo" name="title"  />

                                                <select name="area" onChange={handleInput} value={parameterInput.area} className="input_apo" id="case_status">
                                                    <option >{clients.area}</option>
                                                    <option  value="Personal Injury">Personal Injury</option>
                                                    <option value="Family Law">Family Law</option>
                                                    <option value="Criminal Defense">Criminal Defense</option>
                                                </select>
                                                <textarea type="text" className="input_apo textarea_ad" onChange={handleInput} value={parameterInput.description} name="description"  />
                                                <select name="status" onChange={handleInput} value={parameterInput.status} className="input_apo" id="case_status">
                                                    <option value="">{clients.status}</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Canceled">Canceled</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                                <textarea type="text" className="input_apo textarea_ad" onChange={handleInput} value={parameterInput.result} name="result" />
                                                {/* <table className="input_apo ">
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>File</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Driving license</td>
                                                        <td>License.jpg</td>
                                                        <td><button className='download_f'>Download</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Driving license</td>
                                                        <td>License.jpg</td>
                                                        <td><button className='download_f'>Download</button></td>
                                                    </tr>
                                                </tbody>
                                            </table> */}
                                            </div>
                                        </div>
                                        <div className='add_case_btn upc_bt'>
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

export default UpdateCase