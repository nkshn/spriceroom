import React from "react";
import { Link } from "react-router-dom";

import BuyBtn from './buttons/buy/BuyBtn';
import CartBtn from './buttons/cart/CartBtn';
import FavBtn from './buttons/favorite/FavBtn';

import "./Card.scss";

function Card(props) {

  const {
    link,
    name,
    fullName,
    desc,
    img,
    price,
  } = props;

  return (
    <div className="card-item">
      <div className="card-item_left">
        <img src={img} height={150} />
        <Link to={link}>
          <div>
            <h2>{name}</h2>
            <h3>{fullName}</h3>
          </div>
          <h4>{desc}</h4>
          <div>
            <h2>{price} uah.</h2>
          </div>
        </Link>
      </div>
      <div className="card-item_right">
        <FavBtn />
        <CartBtn />
        <BuyBtn />
      </div>
    </div>
  )
}

export default Card;
