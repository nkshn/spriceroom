import React from "react";
import { Link } from "react-router-dom";

import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Container, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"

import Badge from "../badge/Badge";

import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-leftBlock">
        <ul>
          <li>
            <Link to="/">головна</Link>
          </li>
          <li>
            <Link to="/">про нас</Link>
          </li>
          <li>
            <Link to="/coffees">кави</Link>
          </li>
        </ul>
      </div>
      <div className="nav-centerBlock">
        <img src="http://via.placeholder.com/300x75" />
      </div>
      <div className="nav-rigthBlock">
        <Link to="/cart">корзина ({0})</Link>
      </div>
    </nav>
  )
}