import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import search from "./search";
import message from "./message";

const reducers = combineReducers({
    products,
    cart,
    search,
    message
});

export default reducers;