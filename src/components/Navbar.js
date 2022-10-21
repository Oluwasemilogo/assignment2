import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <div className="nav_links_container">
        <ul
          className={isMobile ? "nav_links_mobile" : "nav_links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/contact" className="contact">
            <li>Contact</li>
          </Link>
          <Link to="/users/page/1" className="account">
            <li>Users</li>
          </Link>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
