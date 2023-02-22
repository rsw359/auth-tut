import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
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
            <img className="avatar" src={user.photos[0].value} alt="" />
          </li>

          <li className="list-item">{user.displayName}</li>

          <li className="list-item" onClick={logout}>
            Logout
          </li>
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
