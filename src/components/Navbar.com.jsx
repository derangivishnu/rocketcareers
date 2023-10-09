// Navbar.js
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/startup-success-arrow-cursor-up-right-direction-overlap-overlapping-colorful-vector-logo-design_216988-1189.jpg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Overview</a></li>
        <li><a href="/about">Prices</a></li>
        <li><a href="/contact">Blog</a></li>
        <li><a href="/contact">Feedback</a></li>
        
        <li><button style={{background:"deeppink",width:'100%'}}><a href="/contact">Purchase</a></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
