
import './main.scss';
import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
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




  // var client_html = "";
  // if (this.state.loading) {
  //   client_html = <tr><td colSpan="6"> <h2>Loading...</h2> </td></tr>
  // }
  // else {
  //   client_html = this.state.client.map((item) => {
  //     return (

  //       <tr key={item.idusers}>
  //         <td>{item.idusers}</td>
  //         <td>{item.username}</td>
  //         <td>{item.email}</td>
  //         <td>{item.phone}</td>
  //         <td>
  //           <Link to={`edit-client/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
  //         </td>
  //         <td>
  //           <button type="button" className="btn btn-danger btn-sm">delete</button>
  //         </td>
  //       </tr>
  //     );
  //   });
  // }

  return (
    <div>

      <div className="home-section">

        <div className="home-content">

          <div className="sales-boxes clienyt_dv">
            <div className="recent-sales box">

              <div className="page-content">
                <div className="projects-section-header">
                  <p>Our Clients</p>
                  <p className="time">
                    {new Date().toLocaleString("en-US", { day: '2-digit' })},  {new Date().toLocaleString("en-US", { month: "long" })}  {new Date().getFullYear()}
                  </p>
                </div>


                <div className="right-bar bar_c" id="style-2">
                  <div className="right-content">
                  {
                        clients.map(client => (
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <img className='client_img' src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                          <p>{client.id} - {client.username}</p>
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
                              <p className='client_n'><span>CIN :</span> {client.cin}</p>
                              <p className='client_n'><span>Phone :</span> {client.phone}</p>
                              <p className="client_n"><span>Submitted cases :</span> 23</p>
                            </div>
                            <div className='caseinfo_right'>
                              <p className="client_n">{client.email}</p>
                              <p className="client_n">{client.address}</p>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                    ))
                  }
                    {/* <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <img className='client_img' src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
                          <p>Rachid Ennatiqi</p>
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
                            <p className='client_n'><span>CIN :</span> Jk654782</p>
                            <p className='client_n'><span>Phone :</span> 0695412348</p>
                            <p className="client_n"><span>Submitted cases :</span> 5</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="client_n">ennatiqi.rachid02@gmail.com</p>
                            <p className="client_n">27 IMM 8 Elhouda cité<br /> Agadir</p>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="project-box-wrapper">
                      <div className="project-box" >
                        <div className="project-box-header">
                          <img className='client_img' src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />
                          <p>Sana Bakrim</p>
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
                            <p className='client_n'><span>CIN :</span> JA612470</p>
                            <p className='client_n'><span>Phone :</span> 0741235691</p>
                            <p className="client_n"><span>Submitted cases :</span> 19</p>
                          </div>
                          <div className='caseinfo_right'>
                            <p className="client_n">bakrim.sana@gmail.com</p>
                            <p className="client_n">105 El Massira 3,<br /> Marrakesh</p>
                          </div>
                        </div>


                      </div>
                    </div> */}

                  </div>
                </div>
              </div>

            </div>

            {/* <div className="recent-sales box">
                <div className="sales-details">
                  <div className="contai">
                    <h1 className="heading-lv1">Clients</h1>


                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Name</th>
                          <th>CIN</th>
                          <th>Phone</th>
                        </tr>
                      </thead>
                      {
                        data.map(item => {
                          return (
                            <tr key={item.username}>
                              <td>{item.username}</td>
                              <td>{item.username}</td>
                              <td>{item.username}</td>
                            </tr>
                          );
                        })
                      }

                      <tbody>
                        {client_html}
                      </tbody>
                    </table>
                  </div>




                </div>


              </div> */}

            < div className="top-sales box" >
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

            </div >
          </div >
        </div >
      </div >

    </div >

  )

}


export default Lawyerspace