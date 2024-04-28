import React from 'react';
import './index.css';
import Home from './home/home';
import Chat from './chat/chatBody/ChatBody';
import Account from './parameter/account';
import Password from './parameter/password';
import Apointement from './apointement/appointement';
import AddCase from './addcases/addcases';

import {

  Routes,
  Route,
} from "react-router-dom";

const Main = () => {

  return (




    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/Appointement" element={<Apointement />} /> 
      <Route path="/Settings/Personal" element={<Account />} />
      <Route path="/Settings/Password" element={<Password />} />
      <Route path="/Add-Case" element={<AddCase />} />
    </Routes>





  )
}

export default Main 