import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import cardReducer from "./card-reducer";
import cartReducer from "./cart-reducer";

let reducers = combineReducers({
    MenuPage: cardReducer,
    auth: authReducer,
    cart: cartReducer
});

let store = createStore(reducers);

window.store = store;

export default store;