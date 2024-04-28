import React from 'react';
import './index.css';
import Client from './client/main';
import Home from './home/home';
import Chat from './chat/chatBody/ChatBody';
import Account from './parameter/account';
import Password from './parameter/password';
import Appointement from './apointement/appointement';
import UpdateCase from './home/props/update/UpdateCase';
import AddAppointement from './home/props/Add-appointement/AddAppointement';


import {

  Routes,
  Route,
} from "react-router-dom";

const Main = () => {

  return (




    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/client" element={<Client />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/Appointement" element={<Appointement />} /> 
      <Route path="/Settings/Personal" element={<Account />} />
      <Route path="/Settings/Password" element={<Password />} />
      <Route path="/View" element={<UpdateCase />} />
      <Route path="/AddAppointement" element={<AddAppointement />} />

    </Routes>





  )
}

export default Main 