import React from 'react';
import './Main.css';
import Home from './home/home';
import Account from './parameter/account';
import Password from './parameter/password';
import Addcases from './addcases/addcases';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from "./chat/chatBody/ChatBody";
const Main = () => {
  
  return (
   
    
    
      
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/Settings/Personal" element={<Account />} />
          <Route path="/password" element={<Password />} />
           <Route path="/cala" element={<h1>calendar</h1>} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/addcases" element={<Addcases />} />
        </Routes>
      
    

  
    
  )
}

export default Main 