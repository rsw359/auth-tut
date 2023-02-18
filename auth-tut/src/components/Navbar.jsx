import React from "react";
import monkey from "./assets/monkey.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Login App</span>
      <ul className="list">
        <li className="list-item">
          <img className="avatar" src={monkey} alt="" />
        </li>

        <li className="list-item">John Doe</li>

        <li className="list-item">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
