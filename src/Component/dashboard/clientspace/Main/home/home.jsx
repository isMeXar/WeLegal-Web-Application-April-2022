import React, { useState, useEffect } from 'react';
import './home.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { NavLink } from "react-router-dom";

import Fatneek from '../img/Fatneek-hover.jpg'
import Teach from '../img/teach-hover.jpg'
import Lisa from '../img/leena-hover.jpg'

function Home() {
  const token = localStorage.getItem('auth_email');
  const [clients, setClient] = useState([])

  useEffect(() => {
    axios.post(`api/showcases/${token}`).then(res => {
      if (res.data.status === 200) {
        
        setClient(res.data.client);
      }

    })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div>

      <section className="home-section">

        <div className="home-content">

          <div className="sales-boxes client_hom">
            <div className="recent-sales box">

              <div className="page-content">
                <div className="projects-section-header">
                  <p>My Case</p>
                  <p className="time">
                    {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                  </p>
                </div>
                <div className="content-categories">
                  <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-1" checked/>
                    <label className="category" htmlFor="opt-1">Active</label>
                  </div>
                  <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-2" />
                    <label className="category" htmlFor="opt-2">Closed</label>
                  </div>
                  <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-3" />
                    <label className="category" htmlFor="opt-3">All</label>
                  </div>

                </div>


                <div className="right-bar bar1" id="style-2">
                  <div className="right-content">
                    {
                        clients.map(client => (
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>April 4, 2022</span>
                          <div>
                            <button className='case_bt update_cs'>
                              <NavLink to="/Client/Dashboard/Update-Case" className="case_up">Update Case</NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='client_n'><span>ID case:</span>{client.id} </p>
                            <p className='client_n'><span>Lawyer :</span> <br/>{client.lawyers_id}</p>
                            <p className="client_n"><span>Case number :</span> {client.case_number}</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="box-content-header">{client.title}</p>
                            <p className="box-content-subheader">{client.description}</p>
                          </div>
                        </div>


                      </div>
                    </div>
                  ))}
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>Mars 23, 2022</span>
                          <div>
                            <button className='case_bt update_cs'>
                              <NavLink to="/Client/Dashboard/Update-Case" className="case_up">Update Case</NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'><p className='client_n'><span>ID case:</span> 42</p>
                            <p className='client_n'><span>Lawyer :</span> <br/>Lisa Isaribi</p>
                            <p className="client_n"><span>Case number :</span> 63072770</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="box-content-header">Family Law</p>
                            <p className="box-content-subheader">SETTLEMENT IN Agadir DIVORCE FOR LONGER ALIMONY PERIOD</p>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>April 4, 2022</span>
                          <div>
                            <button className='case_bt update_cs'>
                              <NavLink to="/Client/dashboard/Update-Case" className="case_up">Update Case</NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='client_n'><span>ID case:</span> 29</p>
                            <p className='client_n'><span>Lawyer :</span> <br/>Lisa Isaribi</p>
                            <p className="client_n"><span>Case number :</span> 53572270</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="box-content-header">Criminal Defense</p>
                            <p className="box-content-subheader">Impaired Driving and Refusal Charges Result in a Curative Discharge</p>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>Mars 23, 2022</span>
                          <div>
                            <button className='case_bt update_cs'>
                              <NavLink to="/Client/dashboard/Update-Case" className="case_up">Update Case</NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='case_n'>Case Number: 63072770</p>
                            <p className='client_n'>Ennatiqi Rachid</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="box-content-header">Family Law</p>
                            <p className="box-content-subheader">SETTLEMENT IN Agadir DIVORCE FOR LONGER ALIMONY PERIOD</p>
                          </div>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            < div className="top-sales box" >
              <div className="titl">Chat</div>
              <div className="message-box">
                <img src={Fatneek} alt="profile image" />
                <div className="message-content">
                  <div className="message-header">
                    <div className="name">Fatneek Jr Wil</div>

                  </div>
                  <p className="message-line">
                    I scheduled a new meeting! Check the aointement page for more information.
                  </p>
                  <p className="message-line time">
                    April, 02
                  </p>
                </div>
              </div>
              <div className="message-box">
                <img src={Lisa} alt="profile image" />
                <div className="message-content">
                  <div className="message-header">
                    <div className="name">Lisa Isaribi</div>

                  </div>
                  <p className="message-line">
                    We are done here! Let's Stay in touch.
                  </p>
                  <p className="message-line time">
                    January, 21
                  </p>
                </div>
              </div>
              

            </div >
          </div>
        </div>
      </section>

    </div>
    



  )
}

export default Home 