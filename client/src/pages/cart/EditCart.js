import React from "react";

// redux
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cart";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function EditCart(props) {
  const {
    products,
    decreaseItemQty, // function
    increaseItemQty, // function
    deleteItem, // function
    submitCart,
    totalCost
  } = props;

  return (
    <>
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
        <h4>Вартість: {totalCost.toLocaleString("de-DE")} грн.</h4>
        <button disabled={products.length === 0 ? true : false} onClick={submitCart}>Підтвердити</button>
      </div>
    </>
  )
}

// fuctions to manipulate redux store
const mapDispatchToProps = (dispatch) => {
  return {
    decreaseItemQty: id => dispatch(cartActions.decreaseItemQty(id)),
    increaseItemQty: id => dispatch(cartActions.increaseItemQty(id)),
    deleteItem: id => dispatch(cartActions.removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(EditCart);
