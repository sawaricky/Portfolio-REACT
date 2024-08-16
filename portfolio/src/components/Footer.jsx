import React from 'react';
import './Footer.css'
const Footer = () => (
  <footer className='footer-content'>
    <div><p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p></div>
    <div><p> Email: <a href="www.gmail.com"> Akash's Email - rickysharma3799@gmail.com </a></p></div>
    <div><p> LinkedIn: <a href="https://www.linkedin.com/in/akash-sharma-916109a6/"> Akash Sharma's LinkedIn </a></p></div>

  </footer>
);

export default Footer;
