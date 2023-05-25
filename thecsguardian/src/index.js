//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Menu,
  Home,
  Articles,
  Media
} from "./components";

ReactDOM.render(
  <Router>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Media" element={<Media />} />

    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
