//import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React, { useState } from 'react';
import Menu from './Menu.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Home.css';
import NavBar from './NavBar.js';

const Home = () => {
  return (
    <div className="home-parent">
      <NavBar />
      <Menu />
      
        <div className="text-content">
          <h2> Welcome to <h1>TheCSGuardian</h1> </h2>
          <h3>Happy Browsing</h3>
          

        </div>
        </div>


  );
}

export default Home;