import * as actionTypes from "./../types/cart";

export const addToCart = (itemId, itemName, itemImg, itemPrice) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
      name: itemName,
      img: itemImg,
      price: itemPrice,
    }
  }
}

export const decreaseItemQty = (itemId) => {
  return {
    type: actionTypes.DECREASE_ITEM_QTY,
    payload: {
      id: itemId
    }
  }
}

export const increaseItemQty = (itemId) => {
  return {
    type: actionTypes.INCREASE_ITEM_QTY,
    payload: {
      id: itemId
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  }
}

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  }
}

export const submitCart = (cartItems) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SUBMIT_CART });

    let formatedCartItems = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      qty: item.qty,
      totalPrice: item.totalPrice
    }));

    fetch(`/api/buy/cart`, {
      method: "POST",
      body: JSON.stringify({
        items: formatedCartItems,
        totalSum: 0
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "cors"
    })
      .then(res => res.json())
      .then(
        () => {
          dispatch({
            type: actionTypes.SUBMIT_CART_SUCCESS,
          });
        },
        err => {
          dispatch({
            type: actionTypes.SUBMIT_CART_FAILURE,
            payload: {
              errormsg: err
            }
          })
        }
      );
  }
}