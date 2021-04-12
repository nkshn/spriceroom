import React, { useState, useEffect } from "react";

// redux
import { useDispatch, connect } from 'react-redux';
import * as cartActions from "../redux/actions/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./CartPage.scss";

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

function CartPage({ cart }) {
  const dispatch = useDispatch();

  const decreaseItemHandler = (id) => {
    dispatch(cartActions.decreaseItemQty(id));
  };
  const increaseItemHandler = (id) => {
    dispatch(cartActions.increaseItemQty(id));
  };
  const deleteItemHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <h3>{cart.length} items</h3>
      </div>
      <div className="cart-items">
        {
          cart.map((item, index) => {
            return (
              <div key={index} className="cart-item">
                <img src={item.img} height={80} />
                <h3>{item.name}</h3>
                <div className="cart-qty-block">
                  <button className="cart-qty-btn" onClick={() => decreaseItemHandler(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <h3>{item.qty}</h3>
                  <button className="cart-qty-btn" onClick={() => increaseItemHandler(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div><h3>{item.qty} x {item.price} = {item.qty * item.price} uah.</h3></div>
                <button className="cart-remove-btn" onClick={() => deleteItemHandler(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(CartPage);
