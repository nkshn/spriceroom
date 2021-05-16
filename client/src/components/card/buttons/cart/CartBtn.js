import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

// redux
import { connect } from 'react-redux';
import * as cartActions from "../../../../redux/actions/cart";

import "./CartBtn.scss";

function CartBtn(props) {
  const {
    itemId,
    itemName,
    itemImg,
    itemPrice,
    isInCart = false,
    addToCart, // redux function
  } = props;

  return (
    <>
      {
        isInCart === true
          ? (
            <button disabled={true} className="cartbtn carbtn-added">
              added
            </button>
          )
          : (
            <button className="cartbtn" onClick={() => addToCart(itemId, itemName, itemImg, itemPrice)}>
              <FontAwesomeIcon icon={faShoppingCart} color="white" />
                add to cart
            </button>
          )
      }
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (itemId, itemName, itemImg, itemPrice) => dispatch(cartActions.addToCart(itemId, itemName, itemImg, itemPrice))
  };
};

export default connect(null, mapDispatchToProps)(CartBtn);
