import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import logo from './img/logo.png'

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Navbar() {
  //translation
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  const [isShown3, setShowWill] = useState(false)
  const MouseEnter3 = e => {
    setShowWill(true)
  }
  const MouseLeave3 = e => {
    setShowWill(false)
  }
  return (
    <nav id="home_nav">
      <Link id="left" to="/" exact>
        <img src={logo} className="logo" />
        <div className='ntitle'>
          <h3>WeLegaL</h3>
          <h4>Law Firm</h4>
        </div>
      </Link>

      <div id="middle">
        <ul >
          <li className="nav-item active">
            <Link className="nav-link" to="/" exact>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/About" exact>
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Lawyer" exact>
              Our Lawyers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Area" exact>
              Practice Area
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Result" exact>
              Result
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Blog" exact>
              Blog
            </Link>
          </li>

        </ul>
      </div>



      <div id="right">
      {isShown3 && (
        <div  className="trns_d" onMouseEnter={MouseEnter3} onMouseLeave={MouseLeave3}>
          <button onClick={() => handleClick('en')} className="trns_b">
            English
          </button>
          <button onClick={() => handleClick('fr')} className="trns_b" >
            French
          </button>
        </div>
        )}
        <button className="translate" onMouseEnter={MouseEnter3} onMouseLeave={MouseLeave3}><FontAwesomeIcon icon={faLanguage} /></button>
        <Link target="_blank" className="sign" to="/authentication" exact>
          Log in
        </Link>
      </div>
    </nav>
  )
}
export default Navbar;