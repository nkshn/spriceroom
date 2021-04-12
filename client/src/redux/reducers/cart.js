import * as actionTypes from "./../types/cart";

const initialState = {
  cart: [], // {id, qty}
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

        return { ...state, cart: updatedCart };
      } else {
        const cartItem = [...state.cart];
        cartItem.push({
          id: action.payload.id,
          name: gettedName,
          img: gettedImg,
          price: gettedPrice,
          qty: 1
        });

        return { ...state, cart: cartItem };
      }

    case actionTypes.DECREASE_ITEM_QTY:
      let exisItem_2 = state.cart.findIndex(item => item.id === action.payload.id);

      if (exisItem_2 >= 0) {
        let updatedCart3 = [...state.cart];
        let count = updatedCart3[exisItem_2].qty
        if(count - 1 <= 0) {
          updatedCart3 = state.cart.filter((item) => item.id !== action.payload.id)
        } else {
          updatedCart3[exisItem_2].qty = count - 1;
        }

        return { ...state, cart: updatedCart3 };
      }

    case actionTypes.INCREASE_ITEM_QTY:
      let exisItem_3 = state.cart.findIndex(item => item.id === action.payload.id);

      if (exisItem_3 >= 0) {
        const updatedCart2 = [...state.cart];
        updatedCart2[exisItem_3].qty = updatedCart2[exisItem_3].qty + 1;

        return { ...state, cart: updatedCart2 };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    default:
      return state;
  };
};

export default cartReducer;