import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./CartBtn.scss";

function CartBtn(props) {
  const addToCartHandler = () => console.log("add to cart");

  return (
    <button className="cartbtn" onClick={addToCartHandler}>
      <FontAwesomeIcon icon={faShoppingCart} color="white" />
      add to cart
    </button>
  )
}

export default CartBtn;
