import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="React-photos-Web/"
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="React-photos-Web/about"
              end
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
