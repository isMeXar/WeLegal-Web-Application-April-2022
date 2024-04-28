import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';


import Navbar from './Navbar/Navbar';

import Home from './Home/Home';
import Lawyer from './Lawyer/Lawyer';
import Area from './Practice Area/Area';
import Blog from './Blog/Blog';
import About from './About/About';
import Result from './Result/Result';
//import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import Will from './Lawyer/Attorney/will';
import Lisa from './Lawyer/Attorney/lisa';
import Teach from './Lawyer/Attorney/teach';

const Static = () =>{
  return (
   <div>
        <Navbar />
        <Switch>
          <Route path="/*" element={<Home />}/>
          <Route path="/Lawyer" exact element={<Lawyer />}/>
          <Route path="/Will" element={<Will />}/>
          <Route path="/Lisa" element={<Lisa />}/>
          <Route path="/Teach" element={<Teach />}/>
          <Route path="/Area" exact element={<Area/>}/>
          <Route path="/Blog" exact element={<Blog/>}/>
          <Route path="/About" exact element={<About/>}/>
          <Route path="/Result" exact element={<Result/>}/>
        </Switch>
        <Footer />
        </div>
   );
}

export default Static;