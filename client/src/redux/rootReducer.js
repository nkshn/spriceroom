import { combineReducers } from "redux";

// reducers
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  cart: cartReducer
});

export default rootReducer;