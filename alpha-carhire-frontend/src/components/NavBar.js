import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
          <li>
              <Link to="/contact">Contact</Link>
          </li>
    </ul>
  );
}

export default NavBar