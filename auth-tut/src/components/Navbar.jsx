import React from "react";
import { Link } from "react-router-dom";
import monkey from "./assets/monkey.jpg";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Login App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img className="avatar" src={monkey} alt="" />
          </li>

          <li className="list-item">John Doe</li>

          <li className="list-item">Logout</li>
        </ul>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
