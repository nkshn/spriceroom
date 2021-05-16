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
    case actionTypes.INCREASE_ITEM_QTY:
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
        totalCost: 0
      }
    default:
      return state;
  };
};

export default cartReducer;