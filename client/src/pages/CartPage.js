import React, { useState, useEffect } from "react";

// redux
import { connect } from 'react-redux';
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
    cart: state.cart.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseItemQty: id => dispatch(cartActions.decreaseItemQty(id)),
    increaseItemQty: id => dispatch(cartActions.increaseItemQty(id)),
    deleteItem: id => dispatch(cartActions.removeFromCart(id)),
    submitCart: (cartItems) => dispatch(cartActions.submitCart(cartItems)),
    clearCart: () => dispatch(cartActions.clearCart()),
  };
};

function CartPage(props) {
  const {
    cart,
    decreaseItemQty,
    increaseItemQty,
    deleteItem,
    submitCart,
    clearCart,
  } = props;

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
                  <button className="cart-qty-btn" onClick={() => decreaseItemQty(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <h3>{item.qty}</h3>
                  <button className="cart-qty-btn" onClick={() => increaseItemQty(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div>
                  <h3>{item.qty} x {item.price} = {item.totalPrice} uah.</h3>
                </div>
                <button className="cart-remove-btn" onClick={() => deleteItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            )
          })
        }
      </div>
      <div className="cart-bottom">
        {
          cart.length === 0
            ? null
            : (
              <div className="cart-header_btns">
                <button className="cart-header-btn submit-btn" onClick={() => submitCart(cart)}>submit</button>
                <button className="cart-header-btn clear-btn" onClick={clearCart}>clear</button>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
