import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Menu.css';


const Menu = () => {
  return (
    <div className="left">
      <nav className="nav flex-column bg-dark">
        <div class="title">
          <h1>The CS Guardian</h1>
        </div>

        <div className="channels">
          
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                  <button>Home</button>
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Articles">
                <button>Articles</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Media">
                  <button>Media</button>
                </NavLink>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Browse">
                <button>Browse</button>
                </NavLink>
              </li>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                <button>About</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                <button>Join Us</button>
                </NavLink>
              </li>
     
        </div>
      </nav>
    </div>
  );
}

export default Menu;