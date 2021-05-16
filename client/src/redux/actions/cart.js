import * as actionTypes from "./../types/cart";

export const addToCart = (itemId, itemName, itemImg, itemPrice) => {
  return (dispatch, getState) => {
    let cartItems = getState().cart.products;

    let indexOfItem = cartItems.findIndex(item => item.id === itemId);

    if (indexOfItem >= 0) {
      let foundedItem = cartItems[indexOfItem];

      foundedItem.qty += 1;
      foundedItem.totalPrice = foundedItem.qty * foundedItem.price;

      let totalCartCost = cartItems.length === 0 ? 0 : cartItems.reduce((a, b) => ({ totalPrice: a.totalPrice + b.totalPrice })).totalPrice;

      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
          products: cartItems,
          totalCart: totalCartCost,
        },
      });
    } else {
      cartItems.push({
        id: itemId,
        name: itemName,
        img: itemImg,
        price: itemPrice,
        totalPrice: itemPrice * 1,
        qty: 1
      });
      let totalCartCost = cartItems.length === 0 ? 0 : cartItems.reduce((a, b) => ({ totalPrice: a.totalPrice + b.totalPrice })).totalPrice;

      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
          products: cartItems,
          totalCart: totalCartCost,
        },
      });
    }
  }
}

export const decreaseItemQty = (itemId) => {
  return (dispatch, getState) => {
    let cartItems = getState().cart.products;

    let indexOfItem = cartItems.findIndex(item => item.id === itemId);
    let foundedItem = cartItems[indexOfItem];
    if (indexOfItem >= 0) {
      if (foundedItem.qty - 1 <= 0) {
        cartItems = cartItems.filter(item => item.id !== itemId);
      } else {
        cartItems[indexOfItem].qty -= 1;
        cartItems[indexOfItem].totalPrice -= foundedItem.price;
      }
      let totalCartCost = cartItems.length === 0 ? 0 : cartItems.reduce((a, b) => ({ totalPrice: a.totalPrice + b.totalPrice })).totalPrice;
      dispatch({
        type: actionTypes.DECREASE_ITEM_QTY,
        payload: {
          products: cartItems,
          totalCart: totalCartCost,
        },
      });
    }
  }
}

export const increaseItemQty = (itemId) => {
  return (dispatch, getState) => {
    let cartItems = getState().cart.products;

    let indexOfItem = cartItems.findIndex(item => item.id === itemId);
    let foundedItem = cartItems[indexOfItem];
    if (indexOfItem >= 0) {
      cartItems[indexOfItem].qty += 1;
      cartItems[indexOfItem].totalPrice += foundedItem.price;
      let totalCartCost = cartItems.length === 0 ? 0 : cartItems.reduce((a, b) => ({ totalPrice: a.totalPrice + b.totalPrice })).totalPrice;
      dispatch({
        type: actionTypes.INCREASE_ITEM_QTY,
        payload: {
          products: cartItems,
          totalCart: totalCartCost,
        },
      });
    }
  }
}

export const removeFromCart = (itemId) => {
  return (dispatch, getState) => {
    let cartItems = getState().cart.products;
    let formatedCartItems = cartItems.filter(item => item.id !== itemId)
    let totalCartCost = formatedCartItems.length === 0 ? 0 : formatedCartItems.reduce((a, b) => ({ totalPrice: a.totalPrice + b.totalPrice })).totalPrice;
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
        products: formatedCartItems,
        totalCart: totalCartCost,
      },
    });
  }
}

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  }
}

export const submitCart = (name, phone) => {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.SUBMIT_CART });
    
    let cartItems = getState().cart.products.map(item => ({
      name: item.name,
      price: item.price,
      qty: item.qty,
      totalPrice: item.totalPrice
    }));
    let cartCost = getState().cart.totalCost;

    fetch(`/api/buy/cart`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: phone,
        items: cartItems,
        totalCost: cartCost
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
              msg: err
            }
          })
        }
      )
  }
}