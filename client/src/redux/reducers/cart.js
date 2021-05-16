import * as actionTypes from "./../types/cart";

const CART_DATA_KEY = "cartData"; // name of localStorage key

const initialState = {
  products: JSON.parse(localStorage.getItem(CART_DATA_KEY)).products || [],
  totalCost: JSON.parse(localStorage.getItem(CART_DATA_KEY)).cost || 0,
  error: "",
  isSending: false
}

const cartReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      localStorage.setItem(CART_DATA_KEY, JSON.stringify({ products: action.payload.products, cost: action.payload.totalCart }));
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.DECREASE_ITEM_QTY:
      localStorage.setItem(CART_DATA_KEY, JSON.stringify({ products: action.payload.products, cost: action.payload.totalCart }));
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.INCREASE_ITEM_QTY:
      localStorage.setItem(CART_DATA_KEY, JSON.stringify({ products: action.payload.products, cost: action.payload.totalCart }));
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.REMOVE_FROM_CART:
      localStorage.setItem(CART_DATA_KEY, JSON.stringify({ products: action.payload.products, cost: action.payload.totalCart }));
      return {
        ...state,
        products: action.payload.products,
        totalCost: action.payload.totalCart,
      }
    case actionTypes.CLEAR_CART:
      localStorage.setItem(CART_DATA_KEY, JSON.stringify({ products: [], cost: 0 }));
      return {
        ...state,
        products: [],
        totalCost: 0
      }
    case actionTypes.SUBMIT_CART:
      return { ...state, isSending: true, error: "" }
    case actionTypes.SUBMIT_CART_SUCCESS:
      localStorage.setItem(CART_DATA_KEY, JSON.stringify({ products: [], cost: 0 }));
      return { ...state, isSending: false, products: [], cost: 0 }
    case actionTypes.SUBMIT_CART_FAILURE:
      return { ...state, isSending: false, error: action.payload.msg }
    default:
      return state;
  };
};

export default cartReducer;