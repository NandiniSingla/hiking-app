import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">Hiking Life</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#class">Class</a>
            </li>
            <li>
              <a href="#promo">Promo</a>
            </li>
            <li>
              <a href="#online-class">Online Class</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hero-section">
        <h1>Discover your next Hike</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Explore Now</button>
      </div>
    </header>
  );
};

export default Header;
