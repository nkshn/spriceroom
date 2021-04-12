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