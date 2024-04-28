import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import './login.css';

function Signup() {




    const navigate = useNavigate();
    const [signupInput, setRegister] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirm: '',
        adresse: '',
        cin: '',
        birthdate: '',
        error_list: [],

    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...signupInput, [e.target.name]: e.target.value });
    }
    const signupSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: signupInput.name,
            phone: signupInput.phone,
            email: signupInput.email,
            cin: signupInput.cin,
            address: signupInput.address,
            password: signupInput.password,
            confirm: signupInput.confirm,
            birthdate: signupInput.birthdate,

        }




        axios.post(`http://127.0.0.1:8000/api/signup`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_email', res.data.email);

                navigate("/Client/Dashboard/home")
            } else {
                setRegister({ ...signupInput, error_list: res.data.validation_errors });
            }
        });

    }
   /*  const x = document.getElementById("pass");

    const showpass = (e) => {
        e.persist();
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    } */
    return (
        <div >
            <div>
                <h5>SIGN UP</h5>
            </div>
            <form onSubmit={signupSubmit}>
                <div class="form-group mb-3 input-group">
                    <div>
                        <input type="text" placeholder="Name" onChange={handleInput} value={signupInput.name} className="form__input" name="name" />
                        <br></br><span id="error">{signupInput.error_list.name}</span>
                    </div>
                    <div>
                        <input type="text" className="form__input mrg" placeholder="Cin" onChange={handleInput} value={signupInput.cin} name="cin" />
                        <br></br><span id="error" className="mrg">{signupInput.error_list.cin}</span>
                    </div>
                </div>

                <div class="form-group mb-3 input-group">
                    <div>
                        <input type="text" className="form__input" placeholder="Phone Number" onChange={handleInput} value={signupInput.phone} name="phone" />
                        <br></br><span id="error">{signupInput.error_list.phone}</span>
                    </div>
                    <div>
                        <input type="date" className="form__input mrg date_inp" placeholder="Birthdate" onChange={handleInput} value={signupInput.birthdate} name="birthdate" />
                        <br></br><span id="error" className="mrg">{signupInput.error_list.birthdate}</span>
                    </div>
                </div>
                <div className="form-group mb-3">

                    <input type="text" placeholder="Address" onChange={handleInput} value={signupInput.address} className="form__input inn" name="address" />
                    <br></br><span id="error">{signupInput.error_list.address}</span>

                </div>
                <div className="form-group mb-3">

                    <input type="email" placeholder="E-mail" onChange={handleInput} value={signupInput.email} className="form__input inn" name="email" />
                    <br></br><span id="error">{signupInput.error_list.email}</span>

                </div>
                <div class="form-group mb-3 input-group">
                    <div className="form-group mb-3">
                        <div>
                            <input type="password" className="form__input"  placeholder="Password" id="pass" onChange={handleInput} value={signupInput.password} name="password" />
                            <br></br><span id="error">{signupInput.error_list.password}</span>
                        </div>
                    </div>
                    <div className="form-group mb-3">

                        <input type="password" className="form__input mrg" placeholder="Confirm password" onChange={handleInput} value={signupInput.confirm} name="confirm" />
                        <br></br><span id="error" className="mrg">{signupInput.error_list.confirm}</span>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <button type="submit" className=" button">Sign up</button>
                </div>
            </form>

        </div>

    );
}

export default Signup;