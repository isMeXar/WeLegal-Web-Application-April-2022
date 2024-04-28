
import './navbar.scss';
import axios from "axios";
import React, {  useState, useEffect } from "react";
import {
  NavLink
} from "react-router-dom";


import logo from './logo_dark.png'

function Navbar ()  {
  const token = localStorage.getItem('auth_email');
  const [clients, setClient] = useState([])

  useEffect(() => {
    axios.get(`api/clientd/${token}`).then(res => {
      if (res.data.status === 200) {
        console.log(token);
        setClient(res.data.client);
      }

    })
      .catch(err => {
        console.log(err);
      })
  }, [])
  //WTF are you doing here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //we are using JSX not plain html
  //you can nt use classNameName or stoke-linecap!!!
  //That will prosuce an error in the future

  return (
    <div className="app-container">
      <div className="app-header">
        <div className="app-header-left">
          <NavLink to='/' className="img_static" target="_blank">
            <img src={logo} className="logo_dash" />
            <p className="app-name">WeLegaL</p>
          </NavLink>
          <div className="search-wrapper">
            <input className="search-input" type="text" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
        </div>
        <div className="app-header-right">
          <button className="mode-switch" title="Switch Theme">
            <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
          <NavLink to='/dashboard/Add-Case' >
            <button className="add-btn" title="Add New Project">
              <svg className="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
          </NavLink>

          <button className="profile-btn">
            <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />

            {/* <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" /> */}
            <span>{clients.username}</span>
          </button>
        </div>

      </div>

    </div>



  )
}

export default Navbar 