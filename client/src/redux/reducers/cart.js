import * as actionTypes from "./../types/cart";

const initialState = {
  cart: [], // {id, qty}
  totalSum: 0,
  error: "",
  isSending: false
}

const cartReducer = function (state = initialState, action) {
  let cartState = state.cart;

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let gettedName = action.payload.name;
      let gettedImg = action.payload.img;
      let gettedPrice = action.payload.price;

      let exisItem_1 = state.cart.findIndex(item => item.id === action.payload.id);

      if (exisItem_1 >= 0) {
        const updatedCart = [...state.cart];

        updatedCart[exisItem_1].qty = updatedCart[exisItem_1].qty + 1;

        return {
          ...state,
          cart: updatedCart,
          totalSum: state.totalSum + gettedPrice
        };
      } else {
        const cartItem = [...state.cart];
        cartItem.push({
          id: action.payload.id,
          name: gettedName,
          img: gettedImg,
          price: gettedPrice,
          totalPrice: gettedPrice * 1,
          qty: 1
        });

        return {
          ...state,
          cart: cartItem,
          totalSum: state.totalSum + gettedPrice
        };
      }

    case actionTypes.DECREASE_ITEM_QTY:
      let exisItem_2 = state.cart.findIndex(item => item.id === action.payload.id);

      if (exisItem_2 >= 0) {
        let updatedCart3 = [...state.cart];

        let itemCount = updatedCart3[exisItem_2].qty;
        let itemPrice = updatedCart3[exisItem_2].price;
        let itemTotalPrice = updatedCart3[exisItem_2].totalPrice;

        let updatedTotalSum = updatedCart3[exisItem_2].totalPrice;

        if (itemCount - 1 <= 0) {
          updatedCart3 = state.cart.filter((item) => item.id !== action.payload.id)

          updatedTotalSum = state.totalSum - updatedCart3[exisItem_2].totalPrice;
        } else {
          updatedCart3[exisItem_2].qty = itemCount - 1;
          updatedCart3[exisItem_2].totalPrice = itemTotalPrice - itemPrice;

          updatedTotalSum = state.totalSum - updatedCart3[exisItem_2].price;
        }

        return {
          ...state,
          cart: updatedCart3,
          totalSum: updatedTotalSum
        };
      }

    case actionTypes.INCREASE_ITEM_QTY:
      let exisItem_3 = state.cart.findIndex(item => item.id === action.payload.id);

      if (exisItem_3 >= 0) {
        const updatedCart2 = [...state.cart];

        updatedCart2[exisItem_3].qty = updatedCart2[exisItem_3].qty + 1;
        updatedCart2[exisItem_3].totalPrice = updatedCart2[exisItem_3].totalPrice + updatedCart2[exisItem_3].price;

        return {
          ...state,
          cart: updatedCart2,
          totalSum: state.totalSum + updatedCart2[exisItem_3].price
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalSum: state.totalSum - state.cart
      };
    case actionTypes.CLEAR_CART:
      return { ...state, cart: [], totalSum: 0 }

    case actionTypes.SUBMIT_CART:
      return { ...state, isSending: true, error: "" }
    case actionTypes.SUBMIT_CART_SUCCESS:
      return { ...state, isSending: false, cart: [], totalSum: 0 }
    case actionTypes.SUBMIT_CART_FAILURE:
      return { ...state, isSending: false, error: action.payload.errormsg }

    default:
      return state;
  };
};

export default cartReducer;