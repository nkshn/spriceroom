import React, { useState } from "react";

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
      {
        isSubmitBtnActive === true
          ? <p>sumbit cart view will be in future</p>
          : (
            <p>
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
                            <p>{item.price.toLocaleString("de-DE")} грн.</p>
                          </div>
                        </div>
                        <div className="cart-item_center">
                          <div className="cart-item_center-container">
                            <div>
                              <div className="cart-item_center-buttons">
                                <button onClick={() => decreaseItemQty(item.id)}>
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <h3>{item.qty}</h3>
                                <button onClick={() => increaseItemQty(item.id)}>
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                              <div className="cart-item_center-remove" onClick={() => deleteItem(item.id)}>
                                <h4>видалити</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item_rigth">
                          <h4>{item.totalPrice.toLocaleString("de-DE")} грн.</h4>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="cart-bottom-section">
                <h4>Вартість: {totalCartCost.toLocaleString("de-DE")} грн.</h4>
                <button onClick={() => setIsSubmitBtnActive(true)}>Підтвердити</button>
              </div>
            </p>
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
    decreaseItemQty: id => dispatch(cartActions.decreaseItemQty(id)),
    increaseItemQty: id => dispatch(cartActions.increaseItemQty(id)),
    deleteItem: id => dispatch(cartActions.removeFromCart(id)),
    submitCart: (name, phone) => dispatch(cartActions.submitCart(name, phone)),
    clearCart: () => dispatch(cartActions.clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
