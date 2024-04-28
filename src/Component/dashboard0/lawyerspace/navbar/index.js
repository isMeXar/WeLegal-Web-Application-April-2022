import React from 'react';
import { NavLink } from "react-router-dom";

import './navbar.scss';

import logo from './logo_dark.png'

const Navbar = () => {

  //WTF are you doing here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //we are using JSX not plain html
  //you can nt use className or stoke-linecap!!!
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

          <button className="profile-btn">
            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
            <span>Lisa Isaribi</span>
          </button>
        </div>

      </div>

    </div>



  )
}

export default Navbar 