import {applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import cardReducer from "./card-reducer";
import cartReducer from "./cart-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    MenuPage: cardReducer,
    auth: authReducer,
    cart: cartReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;