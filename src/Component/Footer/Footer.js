import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Link
} from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

import './footer.css'
import logo_f from './img/logo.png'



const Footer = () => {
    return (
        <div id="footer">

            <div className='row1'>
                <img src={logo_f} className='logo_f' />
                <p>Established in 2018, WeLegaL team strives to get justice for their clients. We believe in a good and honest fight, and we will not stop at anything.</p>
                <div className='social_media'>
                    <a href="https://www.facebook.com/" >
                        <FontAwesomeIcon icon={faFacebook} className='soci_icon' />
                    </a>
                    <a href="https://www.twitter.com/" >
                        <FontAwesomeIcon icon={faTwitter} className='soci_icon' />
                    </a>
                    <a href="https://www.linkedin.com/" >
                        <FontAwesomeIcon icon={faLinkedin} className='soci_icon' />
                    </a>
                    <a href="https://web.whatsapp.com/" >
                        <FontAwesomeIcon icon={faWhatsapp} className='soci_icon' />
                    </a>
                    <a href="https://www.instagram.com/" >
                        <FontAwesomeIcon icon={faInstagram} className='soci_icon' />
                    </a>
                </div>
            </div>

            <hr className='line_1'/>

            <div className='row2'>
                <div className="col col_foot1">
                    <h3 className='hover-underline-animation'>Know Us</h3>
                    <p class="p1">Our attorneys at WeLegaL Law Group have decades
                        of combined experience practicing in Agadir City and
                        neighboring communities. We know the law and we know the
                        courts. Our team includes a former prosecutor who can provide
                        an advantageous perspective on your criminal or traffic defense,
                        as well as a certified defensive driving instructor with a unique
                        understanding of how negligent driving causes accidents
                        and injuries.</p>
                </div>
                <div class="col_foot col_foot2">
                    <h3 className='hover-underline-animation'>Navigate</h3>
                    <ul className='foot_nav'>
                        <li className="foot-item">
                            <Link className="nav-link" to="/" exact>
                                Home
                            </Link>
                        </li>

                        <li className="foot-item">
                            <Link className="nav-link" to="/About" exact>
                                About
                            </Link>
                        </li>

                        <li className="foot-item">
                            <Link className="nav-link" to="/Lawyer" exact>
                                Our Lawyers
                            </Link>
                        </li>
                        <li className="foot-item">
                            <Link className="nav-link" to="/Area" exact>
                                Practice Area
                            </Link>
                        </li>

                        <li className="foot-item">
                            <Link className="nav-link" to="/Result" exact>
                                Result
                            </Link>
                        </li>

                        <li className="foot-item">
                            <Link className="nav-link" to="/Blog" exact>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="col_foot col_foot3">
                    <h3 className='hover-underline-animation'>Head Office</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faLocationDot} className='foot_i' />
                            <a href='#' className='foot_anchor'>30 Immeuble Tinmel Place de OUA, Ave Des Forces Armees Royales, Agadir 80000</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className='foot_i' />
                            <a href='#' className='foot_anchor'>contact@welegal.ma</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className='foot_i' />
                            <a href='#' className='foot_anchor'>(+212) 610877828</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className='line_2'/>

            <div className='row3'>
                <p class="p2">Ⓒ 2022 - All Rights Are Reserved</p>
                </div>
        </div >
    )
}
export default Footer;