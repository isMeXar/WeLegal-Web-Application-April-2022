import React, {  useState, useEffect } from 'react';
import './home.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
function Home()  {


  const token = localStorage.getItem('auth_email');
  const [clients, setClient] = useState([])

  useEffect(() => {
    axios.post(`api/showcases/${token}`).then(res => {
      if (res.data.status === 200) {
        console.log(res.data);
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
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Our Firm Clients</div>
                <div className="number">358</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">how many client we serve</span>
                </div>
              </div>
              <i className='bx cart'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Active Cases</div>
                <div className="number">20</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">How many open cases</span>
                </div>
              </div>
              <i className='bx  cart two'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Cases</div>
                <div className="number">2324</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">How many cases in total</span>
                </div>
              </div>
              <i className='bx cart three'></i>
            </div>
          </div>

          <div className="sales-boxes">
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
                    <input className="nav-item" name="nav" type="radio" id="opt-1" checked />
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

                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>April 4, 2022</span>
                          <div>
                            <button className='case_bt add_appoint_cs'>
                              <NavLink to={`/lawyerhome/AddAppointement/${clients.id}`} className="case_app">Add Appointement</NavLink>
                            </button>
                            <button className='case_bt update_cs'>
                              <NavLink to={`/lawyerhome/View/${clients.id}`} className="case_up">View / Update</NavLink>
                            </button>
                          </div>
                        </div>
                        
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='client_n'><span>Case Number:</span> {clients.id}</p>
                            <p className='client_n'><span>Client: </span> {clients.title}</p>
                            <p className='client_n'><span>Status :</span> {clients.status}</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="box-content-header">Criminal Defense</p>
                            <p className="box-content-subheader">Impaired Driving and Refusal Charges Result in a Curative Discharge</p>
                            <p className='client_n '><span>Result :</span> Found Guilty</p>
                          </div>
                        </div>



                      </div>
                    </div>
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>Mars 23, 2022</span>
                          <div>
                            <button className='case_bt add_appoint_cs'>
                              <NavLink to="/Lawyer/Dashboard/AddAppointement" className="case_app">Add Appointement</NavLink>
                            </button>
                            <button className='case_bt update_cs'>
                              <NavLink to="/Lawyer/Dashboard/View" className="case_up">View / Update</NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                        <div className='caseinfo_left'>
                            <p className='client_n'><span>Case Number:</span> 63072770</p>
                            <p className='client_n'><span>Client: </span>Ennatiqi Rachid</p>
                            <p className='client_n'><span>Status :</span> Canceled</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="box-content-header">Family Law</p>
                            <p className="box-content-subheader">SETTLEMENT IN Agadir DIVORCE FOR LONGER ALIMONY PERIOD</p>
                            <p className='client_n '><span>Result :</span> Found Guilty</p>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <span>April 4, 2022</span>
                          <div>
                            <button className='case_bt add_appoint_cs'>
                              <NavLink to="/dashboard/AddAppointement" className="case_app">Add Appointement</NavLink>
                            </button>
                            <button className='case_bt update_cs'>
                              <NavLink to="/dashboard/View" className="case_up">View / Update</NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='case_n'>Case Number: 53572270</p>
                            <p className='client_n'>Adriouich Abdelilah</p>
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
                            <button className='case_bt add_appoint_cs'>
                              <NavLink to="/dashboard/AddAppointement" className="case_app">Add Appointement</NavLink>
                            </button>
                            <button className='case_bt update_cs'>
                              <NavLink to="/dashboard/View" className="case_up">View / Update</NavLink>
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

            <div className="top-sales box">
              <div className="titl">Chat</div>
              <div className="message-box">
                <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                <div className="message-content">
                  <div className="message-header">
                    <div className="name">Abdelilah Adriouich</div>

                  </div>
                  <p className="message-line">
                    Hey, can tell me about progress of the case? I'm waiting for your response.
                  </p>
                  <p className="message-line time">
                    Dec, 13
                  </p>
                </div>
              </div>
              <div className="message-box">
                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                <div className="message-content">
                  <div className="message-header">
                    <div className="name">Rachid Ennatiqi</div>

                  </div>
                  <p className="message-line">
                    Awesome! 🤩 I like it. We can schedule a meeting for the next one.
                  </p>
                  <p className="message-line time">
                    Dec, 12
                  </p>
                </div>
              </div>
              <div className="message-box">
                <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                <div className="message-content">
                  <div className="message-header">
                    <div className="name">Sana Bakrim</div>

                  </div>
                  <p className="message-line">
                    Thanks for all the hard work !
                  </p>
                  <p className="message-line time">
                    Dec, 11
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default Home 