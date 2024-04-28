import React from 'react'
import './sidebar.scss';

import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

import { FiUsers } from 'react-icons/fi';

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutsubmit = (e) => {
    e.preventDefault();


    axios.post(`api/logout`).then(res => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_username');
        navigate("/authentication")
      }
    });


  }
  return (
    <div className="app-content">
      <div className="app-sidebar">
        <NavLink to='/Lawyer/Dashboard/home' className="app-sidebar-link ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /* strokLinejoin="round" */ className="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" /></svg>
        </NavLink>
        <NavLink to='/Lawyer/Dashboard/client' className="app-sidebar-link ">
          <FiUsers className='client_icon' />
        </NavLink>
        <NavLink to="/Lawyer/Dashboard/chat" className="app-sidebar-link">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /* strokLinejoin="round" */ className="feather feather-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        </NavLink>

        <NavLink to="/Lawyer/Dashboard/Appointement" className="app-sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /* strokLinejoin="round" */ className="feather feather-calendar">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" /></svg>
        </NavLink>
        <NavLink to="/Lawyer/Dashboard/Settings/Personal" className="app-sidebar-link">
          <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" /* strokLinejoin="round" */ strokeWidth="2" viewBox="0 0 24 24">
            <defs />
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </NavLink>
        <br />
        <br />
        <a onClick={logoutsubmit} className="app-sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" /* strokLinejoin="round" */ strokeWidth="2" className="feather feather-log-out" viewBox="0 0 24 24">
            <defs />
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </a>

      </div></div>
  )
}

export default Sidebar
