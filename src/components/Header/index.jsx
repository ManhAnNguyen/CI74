import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const handleActive = ({ isActive }) => {
    return isActive && "active";
  };

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    if (current) {
      setCurrentUser(current);
    } else {
      setCurrentUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("../log-in", { replace: true });
  };

  console.log(currentUser);

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
            {currentUser ? (
              <div className="user-info">
                <span className="greet">Hello ,{currentUser.userName}</span>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink to="/log-in" className={handleActive}>
                  Log In
                </NavLink>
                <NavLink to="/sign-up" className={handleActive}>
                  Sign up
                </NavLink>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
