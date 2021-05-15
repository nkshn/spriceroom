import * as actionTypes from "./../types/cart";

const initialState = {
  cart: [],
  totalCost: 0,
  error: "",
  isSending: false
}

const cartReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: 
      return {
        ...state,
        cart: action.payload.cart,
        totalCost: action.payload.totalCart,
      }

    default:
      return state;
  };
};

export default cartReducer;