import React from 'react';
import './index.css';
import Navbar from './navbar';
import Sidebar from './sidebar/sidebar';
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