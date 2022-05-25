import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  let activeStyle = {
    color: "yellow",
  };
  return (
    <SHeader>
      <NavLink
        to={"/"}
        className="logo"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Movie
      </NavLink>
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
