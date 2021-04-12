import React from "react";
import { Link } from 'react-router-dom';

import Badge from "../badge/Badge";

import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav-links_title" to="/">
        <p className="nav-logo">The Spiceroom</p>
      </Link>
      <ul className="nav-links">
        <Link className="nav-links_title" to="/assortment"><li>Assortment</li></Link>
        <Link className="nav-links_title" to="/cart"><li className="nav-cart">Cart <Badge /></li></Link>
      </ul>
    </nav>
  )
}