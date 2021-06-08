import React, { useState } from "react";

// redux
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// container
import EditCart from "./EditCart";
import ConfirmCart from "./ConfirmCart";

import "./CartPage.scss";

function CartPage(props) {
  const {
    products,
    totalCartCost,
    decreaseItemQty, // function
    increaseItemQty, // function
    deleteItem, // function
    submitCart // http function
  } = props;

  // ui state
  const [isSubmitBtnActive, setIsSubmitBtnActive] = useState(false);

  // ui functions
  const sumbmitCartHandler = () => {
    setIsSubmitBtnActive(true);
  }

  return (
    <div className="сart-container">
      <div className="cart-title">
        {
          isSubmitBtnActive === true ? "підтвердження" : "корзина"
        }
      </div>
      {
        isSubmitBtnActive === true
          ? <ConfirmCart />
          : (
            <EditCart
              products={products}
              deleteItem={deleteItem}
              decrease={decreaseItemQty}
              increase={increaseItemQty}
              submitCart={sumbmitCartHandler}
              totalCost={totalCartCost}
            />
          )
      }
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
    // decreaseItemQty: id => dispatch(cartActions.decreaseItemQty(id)),
    // increaseItemQty: id => dispatch(cartActions.increaseItemQty(id)),
    // deleteItem: id => dispatch(cartActions.removeFromCart(id)),
    submitCart: (name, phone) => dispatch(cartActions.submitCart(name, phone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
