
import './appointement.scss';
import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";

import Fatneek from '../img/Fatneek-hover.jpg'
import Teach from '../img/teach-hover.jpg'
import Lisa from '../img/leena-hover.jpg'

function Lawyerspace() {



  const [clients, setClient] = useState([])

  useEffect(() => {
    axios.get(`api/clientdata`).then(res => {
      if (res.data.status === 200) {

        setClient(res.data.client);
      }

    })
      .catch(err => {
        console.log(err);
      })
  }, [])
  const deleteclient = (e, id) => {
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "deleting";

    axios.delete(`/api/deleteclient/${id}`).then(res => {
      if (res.data.status === 200) {
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        thisClicked.innerText = "delete";
      }
    });
  }


  return (
    <div>

      <div className="home-section">

        <div className="home-content">

          <div className="sales-boxes">
            <div className="recent-sales box">

              <div className="page-content">
                <div className="projects-section-header">
                  <p>Appointements</p>
                  <p className="time">
                    {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                  </p>
                </div>


                <div className="right-bar bar_c" id="style-2">
                  <div className="right-content">
                    <div className="project-box-wrapper">
                      <div className="project-box meeting_bg" >

                        <div className="project-box-header">
                          <img className='client_img' src={Fatneek} alt="profile image" />
                          <p>Court Session</p>
                          <div className="more-wrapper">
                            <button className="project-btn-more">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">

                          <div className="project-box-content-header">
                            <div className='caseinfo_left'>
                              <p className='client_n meeting_col'><span>ID case:</span> 2</p>
                              <p className='client_n meeting_col'><span>Lawyer :</span> Fatneek Jr Will</p>
                              <p className="client_n meeting_col"><span>Case number :</span> 54786324</p>
                            </div>
                            <div className='caseinfo_right'>
                              <p className="client_n meeting_col"><span>Time: </span> 09:00:00AM</p>
                              <p className="client_n meeting_col"><span>Date: </span> 10-04-2022</p>
                              <p className="client_n meeting_col"><span>In: </span>Tribunal Court house<br />Boulevard Hassan II, Agadir</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="project-box-wrapper">
                      <div className="project-box meeting_bg" >

                        <div className="project-box-header">
                          <img className='client_img' src={Fatneek} alt="profile image" />
                          <p>Meeting</p>
                          <div className="more-wrapper">
                            <button className="project-btn-more">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='client_n meeting_col'><span>ID case:</span> 2</p>
                            <p className='client_n meeting_col'><span>Lawyer :</span> Fatneek Jr Will</p>
                            <p className="client_n meeting_col"><span>Case number :</span> 54786324</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="client_n meeting_col"><span>Time: </span> 11:00:00AM</p>
                            <p className="client_n meeting_col"><span>Date: </span> 04-04-2022</p>
                            <p className="client_n meeting_col"><span>In: </span>Zoom</p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="project-box-wrapper">
                      <div className="project-box meeting_bg" >

                        <div className="project-box-header">
                          <img className='client_img' src={Fatneek} alt="profile image" />
                          <p>Meeting</p>
                          <div className="more-wrapper">
                            <button className="project-btn-more">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <div className='caseinfo_left'>
                            <p className='client_n meeting_col'><span>ID case:</span> 2</p>
                            <p className='client_n meeting_col'><span>Lawyer :</span> Fatneek Jr Will</p>
                            <p className="client_n meeting_col"><span>Case number :</span> 54786324</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="client_n meeting_col"><span>Time: </span> 03:00:00PM</p>
                            <p className="client_n meeting_col"><span>Date: </span> 27-03-2022</p>
                            <p className="client_n meeting_col"><span>In: </span>Zoom</p>
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
          </div >
        </div >
      </div >

    </div >

  )

}


export default Lawyerspace