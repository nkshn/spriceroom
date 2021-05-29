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
    <div></div>
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
