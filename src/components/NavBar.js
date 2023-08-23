import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css"; // Assuming you have a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/post">Posts</Link>
        </li>
        <li className="nav-item">
          <Link to="/todo">Todo List</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">Shopping Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
