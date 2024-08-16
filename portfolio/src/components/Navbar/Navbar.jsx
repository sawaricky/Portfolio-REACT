import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
// for navigations responsiveness
  useEffect(() => {
    const menu = document.getElementById("menu-icon");
    const navigationLinks = document.querySelector("#navigation-bar ul");

    if (window.innerWidth <= 768) {
      navigationLinks.classList.add("hide");
    }

    const toggleNavigation = () => {
      navigationLinks.classList.toggle("show");
      navigationLinks.classList.toggle("hide");
    };

    menu.addEventListener("click", toggleNavigation);

    return () => {
      menu.removeEventListener("click", toggleNavigation);
    };
  }, []);

  return (
    <header id="header">
      <div id="banner">
        <div id="logo">
          <img src="/assets/Portfolio-logo.png" alt="Logo" />
        </div>
        <div id="main-title">
          <h3>Akash Sharma's Portfolio</h3>
        </div>
      </div>
      <nav id="navigation-bar" aria-label="Main navigation">
        <div id="menu-icon">&#9776;</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
