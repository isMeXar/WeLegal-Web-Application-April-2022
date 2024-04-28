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
      <Route path="/account" element={<Account />} />
      <Route path="/password" element={<Password />} />
      <Route path="/View/:id" element={<UpdateCase />} />
      <Route path="/AddAppointement/:id" element={<AddAppointement />} />

    </Routes>





  )
}

export default Main 