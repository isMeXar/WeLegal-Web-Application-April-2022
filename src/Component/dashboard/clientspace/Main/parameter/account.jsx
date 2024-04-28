import React from 'react';
import './para.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { CleanHandsTwoTone } from '@mui/icons-material';
const Account = () => {

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
    const [parameterInput, setRegister] = useState({
        name: '',
        cin: '',
        phone: '',
        email: '',
        address: '',
        error_list: [],

    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...parameterInput, [e.target.name]: e.target.value });
    }
    const parameterSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: parameterInput.name,
            phone: parameterInput.phone,
            email: parameterInput.email,
            cin: parameterInput.cin,
            address: parameterInput.address,
        }

        axios.post(`http://127.0.0.1:8000/api/updateclient/${token}`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_email', res.data.email);
            } else {
                setRegister({ ...parameterInput, error_list: res.data.validation_errors });
            }
        });

    }
    return (
        <div>
            <div className="task-manager">

                <div className="page-content">

                    <div className="tasks-wrapper">

                        <div className="bg-white  d-sm-flex">
                            <div className="profile-tab-nav border-right">
                                <div className="p-4">
                                    <div className="img-circle text-center mb-3">
                                        <img className='client_img' src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                                    </div>
                                    <h4 className="text-center">{clients.name}</h4>
                                </div>
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <NavLink to="/Client/Dashboard/Settings/Personel" className="nav-link" id="account-tab" data-toggle="pill" role="tab" aria-controls="account" aria-selected="true">
                                        <i className="fa fa-home text-center mr-1"></i> Personal Information
                                    </NavLink>
                                    <NavLink to="/Client/Dashboard/Settings/Password" className="nav-link" id="password-tab" data-toggle="pill" role="tab" aria-controls="password" aria-selected="false">
                                        <i className="fa fa-key text-center mr-1"></i> Password
                                    </NavLink>

                                </div>
                            </div>
                            <form onSubmit={parameterSubmit}>
                                <div className="tab-content p-4 p-md-5" >

                                    <div className="tab-pane fade show active" >
                                        <h3 className="mb-4">Account Settings</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control" onChange={handleInput} value={parameterInput.name} name="name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>Phone Number</label>
                                                    <input type="text" className="form-control" onChange={handleInput} value={parameterInput.phone} name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>CIN</label>
                                                    <input type="text" className="form-control" onChange={handleInput} value={parameterInput.cin} name="cin" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>E-mail</label>
                                                    <input type="text" className="form-control" onChange={handleInput} value={parameterInput.email} name="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-par">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control address_inp" onChange={handleInput} value={parameterInput.address} name="address" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className='setting_btn'>
                                            <button className="btn btn-primary">Update</button>
                                            <button className="btn btn-light reset_btn">Reset</button>
                                        </div>
                                    </div>



                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Account 