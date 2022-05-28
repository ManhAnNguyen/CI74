import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  let activeStyle = {
    color: "yellow",
  };
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    setCurrentUser(current);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("../sign-in", { replace: true });
  };

  return (
    <SHeader>
      <NavLink
        to={"/"}
        className="logo"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        SHOP
      </NavLink>
      {currentUser ? (
        <div className="options">
          <ul>
            {currentUser.role === "admin" && (
              <li>
                <NavLink
                  to="/admin"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Admin
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/user"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                User
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Log out</button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="options">
          <ul>
            <li>
              <NavLink
                to="/sign-up"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/sign-in"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  background-color: #146ab5;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
  }
  .logo {
    color: white;
    text-decoration: none;
    font-size: 26px;
  }
  .options {
    ul {
      display: flex;
      align-items: center;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: white;
          margin-right: 10px;
        }
      }
    }
  }
`;
