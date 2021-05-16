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

  // form states
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  useEffect(() => {
    if (nameValue !== "" && phoneValue !== "") {
      setIsSubmitBtnActive(true);
    } else {
      setIsSubmitBtnActive(false);
    }
  }, [nameValue, phoneValue]);

  // ui state
  const [isSubmitBtnActive, setIsSubmitBtnActive] = useState(false);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <div>
          <h3>{totalCartCost} total amount</h3>
          <h3>{products.length} items</h3>
        </div>
      </div>
      <div className="cart-items">
        {
          products.map((item, index) => {
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
          products.length === 0
            ? null
            : (
              <>
                <div className="cart-bottom_inputs">
                  <h3>Ваші дані:</h3>
                  <div>
                    <label>Name:</label>
                    <input type="tel" value={nameValue} required onChange={(e) => setNameValue(e.target.value)} />
                  </div>
                  <div>
                    <label>Phone:</label>
                    <input type="tel" value={phoneValue} required onChange={(e) => setPhoneValue(e.target.value)} />
                  </div>
                </div>
                <div className="cart-bottom_btns">
                  {
                    isSubmitBtnActive === true
                      ? <button className="cart-bottom-btn submit-btn" onClick={() => submitCart(nameValue, phoneValue)}>submit</button>
                      : <button className="cart-bottom-btn submit-btn submit-disabled">submit</button>
                  }
                  <button className="cart-bottom-btn clear-btn" onClick={clearCart}>clear</button>
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    totalCartCost: state.cart.totalCost
  };
};

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
