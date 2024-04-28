import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Dashboard_Client from './Component/dashboard/clientspace/dashboard';
import Dashboard_Lawyer from './Component/dashboard/lawyerspace/index';
import Login from './Component/login/log';
import axios from "axios";
import './App.css';

import Static from './Component/static';
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : ``;
  return config;
});

const App = () =>{
  return (
    <Router>
        <Switch>
          <Route path="/authentication" element={< Login />} />
          <Route path="/Client/Dashboard/*" element={< Dashboard_Client />} />
          <Route path="/Lawyer/Dashboard/*" element={< Dashboard_Lawyer />} />
          <Route path="/*" element={<Static />}/>
        </Switch>
    </Router>
   );
}

export default App;
