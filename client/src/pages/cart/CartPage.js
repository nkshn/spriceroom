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
    <div className="сart-container">
        <div className="cart-title">Корзина</div>
        <div className="cart-header">
          <h3>товар</h3>
          <h3>кількість</h3>
          <h3>загальна сума</h3>
        </div>
        <div className="cart-items">
        {
          products.map((item, index) => {
            return (
              <div key={index} className="cart-item">
                <div className="cart-item_left">
                  <img src={item.img} height={80} />
                  <div className="cart-item_left-textBlock">
                    <p>{item.name}</p>
                    <p>250 гр.</p>
                    <p>{item.price} грн.</p>
                  </div>
                </div>
                <div className="cart-item_center">
                  
                </div>
                <div className="cart-item_rigth">
                  
                </div>
              </div>
            )
          })
        }
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
