import React from 'react';
import './para.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Password = () => {
    const token = localStorage.getItem('auth_email');
    const [clients, setClient] = useState({})
    useEffect(() => {
        axios.get(`api/clientd/${token}`).then(res => {
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
    
    const [passwordinput, setRegister] = useState({
        oldpassword: '',
        newpassword: '',
        confirm: '', 
        error_list: [],

    });
    
    const handleInput = (e) => {
         e.persist();
        setRegister({ ...passwordinput, [e.target.name]: e.target.value }); 

    }
    const parameterSubmit = (e) => {
        e.preventDefault();

         const data = {
            oldpassword: passwordinput.oldpassword,
            confirm: passwordinput.confirm,
            newpassword: passwordinput.newpassword,
        } 

         axios.post(`http://127.0.0.1:8000/api/passwordupdate/${token}`, data).then(res => {
            if (res.data.status === 200) {
                console.log('good');
            } else {
                setRegister({ ...passwordinput, error_list: res.data.validation_errors });
            }
        }); 

    }
    return (
        <div>
            <div className="task-manager">

                <div className="page-content">
                    <div className="projects-section-header">
                        <p>Account Settings</p>
                    </div>
                    <div className="tasks-wrapper">

                        <div className="bg-white  d-sm-flex">
                            <div className="profile-tab-nav border-right">
                                <div className="p-4">
                                    <div className="img-circle text-center mb-3">
                                        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="Image" className="shadow" />
                                    </div>
                                    <h4 className="text-center">{clients.name}</h4>
                                </div>
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <NavLink to="/Lawyer/Dashboard/Settings/Personal" className="nav-link" id="account-tab" data-toggle="pill" role="tab" aria-controls="account" aria-selected="true">
                                        <i className="fa fa-home text-center mr-1"></i> Account
                                    </NavLink>
                                    <NavLink to="/Lawyer/Dashboard/Settings/Password" className="nav-link" id="password-tab" data-toggle="pill" role="tab" aria-controls="password" aria-selected="false">
                                        <i className="fa fa-key text-center mr-1"></i> Password
                                    </NavLink>

                                </div>
                            </div>
                            <div className="tab-content p-4 p-md-5">

                                <form onSubmit={parameterSubmit}>
                                    <div className="tab-pane fade show active" >
                                        <h3 className="mb-4">Password Settings</h3>
                                        <div className="row">
                                        <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>old password</label>
                                                    <input type="password" className="form-control" onChange={handleInput} value={passwordinput.oldpassword} name="oldpassword" />
                                                </div>
                                            </div>

                                            <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>new password</label>
                                                    <input type="password" className="form-control" onChange={handleInput} value={passwordinput.newpassword} name="newpassword" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>confirm password</label>
                                                    <input type="password" className="form-control" onChange={handleInput} value={passwordinput.confirm} name="confirm" />
                                                </div>
                                            </div>
                                            </div>


                                        </div>
                                        <div>
                                            <button className="btn btn-primary">Update</button>
                                            <button className="btn btn-light">Cancel</button>
                                        </div>
                                    </div>

                                </form>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password 