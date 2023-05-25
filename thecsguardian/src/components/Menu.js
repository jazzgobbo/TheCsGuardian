import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Menu.css';


const Menu = () => {
  return (
    <div className="left">
      <nav className="nav flex-column bg-dark">
        <div className="channels">
          
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                  <p>Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Articles">
                <p>Articles</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Media">
                  <p>Media</p>
                </NavLink>
              </li>
     
        </div>
      </nav>
    </div>
  );
}

export default Menu;