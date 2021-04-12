import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

// redux
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from "../../../../redux/actions/cart";

import "./CartBtn.scss";

function CartBtn(props) {
  const {
    itemId,
    itemName,
    itemImg,
    itemPrice,
    isInCart = false
  } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(itemId, itemName, itemImg, itemPrice));
  };

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
            <button className="cartbtn" onClick={addToCartHandler}>
              <FontAwesomeIcon icon={faShoppingCart} color="white" />
                add to cart
            </button>
          )
      }
    </>
  )
}

export default CartBtn;
