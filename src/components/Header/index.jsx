import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };
  return (
    <header>
      <NavLink to="/" className={`logo ${handleActive}`}>
        Mindx
      </NavLink>
      <div className="options">
        <ul>
          <li>
            <NavLink to="/user" className={handleActive}>
              User
            </NavLink>
            <NavLink to="/log-in" className={handleActive}>
              Log In
            </NavLink>
            <NavLink to="/sign-up" className={handleActive}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
