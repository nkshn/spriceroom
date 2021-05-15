import * as actionTypes from "./../types/cart";

const initialState = {
  products: [],
  totalCost: 0,
  error: "",
  isSending: false
}

const cartReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: 
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.DECREASE_ITEM_QTY:
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    default:
      return state;
  };
};

export default cartReducer;