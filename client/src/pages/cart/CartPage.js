import React, { useState, useEffect } from "react";

// redux
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./CartPage.scss";

function CartPage(props) {
  const {
    products,
    totalCartCost,
    decreaseItemQty, // functions
    increaseItemQty, // functions
    deleteItem, // functions
    submitCart, // functions
    clearCart, // functions
  } = props;

  // ui state
  const [isSubmitBtnActive, setIsSubmitBtnActive] = useState(false);

  return (
    
    <div className="container">
        <div className="cart-title">Корзина</div>
        <div className="titles">
          <p className="t1">PRODUCT</p>
          <p className="t2">QUANTITY</p>
          <p className="t3">TOTAL</p>
        </div><hr />
        <div className="cart-items">
        {
          products.map((item, index) => {
            return (
              <div key={index} className="cart-item">
                <img src={item.img} height={80} />
                <div className="cart-qty-block">
                  <button className="cart-qty-btn" onClick={() => decreaseItemQty(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <h3>{item.qty}</h3>
                  <button className="cart-qty-btn" onClick={() => increaseItemQty(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <p className="cart-remove-btn" onClick={() => deleteItem(item.id)}>
                    Remove
                </p>
                <div className="total-price">
                  <div>{item.totalPrice} ₴</div>
                </div>
                <div className="coffee-name">{item.name}</div >
              </div>
            )
          })
        }
        <hr className="b-line" />
      </div>
    </div>
    
  )
}

// get data from redux store
const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    totalCartCost: state.cart.totalCost
  };
};

// fuctions to manipulate redux store
const mapDispatchToProps = (dispatch) => {
  return {
    decreaseItemQty: id => dispatch(cartActions.decreaseItemQty(id)),
    increaseItemQty: id => dispatch(cartActions.increaseItemQty(id)),
    deleteItem: id => dispatch(cartActions.removeFromCart(id)),
    submitCart: (name, phone) => dispatch(cartActions.submitCart(name, phone)),
    clearCart: () => dispatch(cartActions.clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
