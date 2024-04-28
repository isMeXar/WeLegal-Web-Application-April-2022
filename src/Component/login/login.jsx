import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "./authentication";
import './login.css';

import { IoIosEye } from 'react-icons/io';


function Login() {


  const navigate = useNavigate();
 

  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],

  });
  const handleInput = (e) => {

    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  }
  const loginSubmit = (e) => {
    e.preventDefault();


    const data = {
      email: loginInput.email,
      password: loginInput.password,


    }

    axios.post(`api/clientlogin`, data).then(res => {
      if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_email', res.data.email);
        navigate("/Client/Dashboard/home")
      } else if (res.data.status === 201) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_email', res.data.email);
        navigate("/Lawyer/Dashboard/home")
      } else if(res.data.status === 401){
        console.log("bad");
      }else{
        setLogin({ ...loginInput, error_list: res.data.validation_errors });
      }
    });

  }
  

  const x = document.getElementById("myInput");

  const myFunction = (e) => {
    e.persist();
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  return (
    <div >
      <div>


        <div className="carde">
          <div className="log_head">
            <h5>LOGIN AS</h5>
          </div>

          <form onSubmit={loginSubmit}  >
            <div className="form-group mb-3">

              <input type="email" placeholder="email"
                onChange={handleInput} value={loginInput.email} name="email" className="form__input inn input_log" />
              <br></br><span id="error">{loginInput.error_list.email}</span>

            </div>
            <div className="form-group mb-3">
              <label>
                <input type="password" placeholder="password" onChange={handleInput} value={loginInput.password} name="password" className="form__input inn input_log" id="myInput" />
                <label>
                  <IoIosEye className="toggle_pass" />
                  <input type="checkbox" className=" check" onChange={myFunction} />
                </label>
              </label>
              <br></br><span id="error">{loginInput.error_list.password}</span>
            </div>
            <div>
              <button type="submit" className=" button">Login</button>
              <button className="forgot_pass">Forgot Password ?</button>
            </div>

          </form>
        </div>
      </div>


    </div>

  );






}

export default Login; 
