import React from "react";
import { useHistory, Link } from "react-router-dom";

// redux
import { connect } from 'react-redux';

import './Navbar.scss';

function Navbar(props) {
  const { len } = props;
  const history = useHistory();

  return (
    <nav className="nav-container">
      <div className="nav-leftBlock">
        <ul>
          <li>
            <Link to="/">про нас</Link>
          </li>
          <li>
            <Link to="/coffees">кава</Link>
          </li>
        </ul>
      </div>
      <div className="nav-centerBlock">
        <img src="http://via.placeholder.com/300x75" onClick={() => history.push("/")}/>
      </div>
      <div className="nav-rigthBlock">
        <Link to="/cart">корзина ({len})</Link>
      </div>
    </nav>
  )
}


const mapStateToProps = (state) => {
  return {
    len: state.cart.products.length
  };
};

export default connect(mapStateToProps)(Navbar);