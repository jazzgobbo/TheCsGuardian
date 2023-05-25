//import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React from 'react';
import Menu from './Menu.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="home-parent">
      <Menu />
      
        <div className="text-content">
          <h1>Welcome to</h1>
          <h1>The CS Guardian</h1>
          <p>The CS Guardian was founded by three passionate Northwestern students: 
            Katherine Feng, Jaz Gobbo, and Andrew Gao. Inspired by our CS course on 
            Computing in Ethics and Society, we decided to create a student-run 
            platform that synthesizes articles and videos created by students that 
            address the future of new technology, such as AI, ML, etc. We hope to raise
            awareness of the ethical implications of technology.
          </p>
          

        </div>
        </div>


  );
}

export default Home;