import React from "react";
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav-links_title" to="/">
        <p className="nav-logo">The Spiceroom</p>
      </Link>
      <ul className="nav-links">
        <Link className="nav-links_title" to="/about-us"><li>About us</li></Link>
        <Link className="nav-links_title" to="/assortment"><li>Assortment</li></Link>
        <Link className="nav-links_title" to="/blog"><li>Blog</li></Link>
        <Link className="nav-links_title" to="/contacts"><li>Contacts</li></Link>
      </ul>
    </nav>
  )
}