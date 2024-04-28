import React from 'react';
import './dashboard.css';
import Navbar from './Navbar';
import Sidebar from './sidebar/Sidebar';
import Main from './Main';

function Dashboard() {
  return (
    <div className="global-container">

      <Navbar />
      <div className='body-container'>
        <Sidebar />
        <Main />
      </div>

    </div>

  );
}

export default Dashboard;